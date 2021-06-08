const downloadBtn = document.getElementById("downloadButton");
let hasSaidThanks = false;

let winDownloadURL = undefined;
let linuxDownloadURL = undefined;

/**
 * Get latest release from github repo and set download link vars.
 */
function setDownloadLinks() {
  // **Releases are pre-releases so we can't use the api
  // to get the latest release, because that only counts full releases.
  // When we start creating full releases, then change this to get the latest release.**
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
    });
}

function openDownloadLink(which) {
  if (which == "win" && winDownloadURL) {
    window.open(winDownloadURL, "_self");
  }

  if (which == "linux" && linuxDownloadURL) {
    window.open(linuxDownloadURL, "_self");
  }
}

downloadBtn.addEventListener("click", (e) => {
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

document.getElementById("windowsDownloadBtn").addEventListener("click", () => {
  openDownloadLink("win");
});

document.getElementById("linuxDownloadBtn").addEventListener("click", () => {
  openDownloadLink("linux");
});

setDownloadLinks();
