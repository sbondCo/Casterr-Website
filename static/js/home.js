const downloadBtn = document.getElementById("downloadButton");
var hasSaidThanks = false;

downloadBtn.addEventListener("click", function () {
  if (hasSaidThanks == false) {
    let toRevertTo = document.getElementById("title").textContent;
    document.getElementById("title").textContent = "Thanks!";

    setTimeout(function () {
      document.getElementById("title").textContent = toRevertTo;
    }, 4000);

    hasSaidThanks = true;
  }
});
