let button = document.querySelector("button");
button.addEventListener("click", function () {
  document.body.style.backgroundColor =
    "rgb(" +
    Math.round(Math.random() * 500) +
    "," +
    Math.round(Math.random() * 590) +
    "," +
    Math.round(Math.random() * 355) +
    ")";
});
