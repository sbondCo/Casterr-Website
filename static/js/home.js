const downloadBtn = document.getElementById("downloadButton");
let hasSaidThanks = false;

let winDownloadURL = "";
let linuxDownloadURL = "";

/**
 * Get latest release from github repo and set download link vars.
 */
function setDownloadLinks() {
  fetch("https://api.github.com/repos/sbondCo/Casterr/releases", {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json"
    }
  })
    .then((r) => r.json())
    .then((data) => {
      let assets = data[0].assets;

      let win = assets.filter((a) => a.name.toLowerCase().endsWith(".exe"))[0];
      let linux = assets.filter((a) => a.name.toLowerCase().endsWith(".appimage"))[0];

      winDownloadURL = win.browser_download_url;
      linuxDownloadURL = linux.browser_download_url;

      downloadBtn.classList.remove("loading");

      console.log(win, linux);
    });
}

downloadBtn.addEventListener("click", () => {
  if (downloadBtn.classList.contains("loading")) return;

  if (!hasSaidThanks) {
    let toRevertTo = document.getElementById("title").textContent;
    document.getElementById("title").textContent = "Thanks!";

    setTimeout(() => {
      document.getElementById("title").textContent = toRevertTo;
    }, 4000);

    hasSaidThanks = true;
  }
});

setDownloadLinks();
