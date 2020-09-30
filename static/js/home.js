var downloadBtn = document.getElementById("downloadButton");
var hasFunctionRan = false;

downloadBtn.addEventListener("click", function () {
  if (hasFunctionRan == false) {
    document.getElementById("title").textContent = "Thanks!";
    document.getElementById("description").textContent = "You're the best!";

    setTimeout(function () {
      document.getElementById("title").textContent = "Casterr";
      document.getElementById("description").textContent = "Share your best highlights easily";
    }, 4000);

    hasFunctionRan = true;
  }
});
