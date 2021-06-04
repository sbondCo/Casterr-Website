const downloadBtn = document.getElementById("downloadButton");
const sourceBtn = document.getElementById("sourceButton");
var hasFunctionRan = false;

downloadBtn.addEventListener("click", function () {
  if (hasFunctionRan == false) {
    document.getElementById("title").textContent = "Thanks!";

    setTimeout(function () {
      document.getElementById("title").textContent = "Casterr";
    }, 4000);

    hasFunctionRan = true;
  }
});

// downloadBtn.addEventListener("click", function () {
//   window.open();
// });
