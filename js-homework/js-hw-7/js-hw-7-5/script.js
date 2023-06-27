document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");
  const res = document.querySelector(".res");
  button.addEventListener("click", function () {
    res.textContent = "I was pressed!";
  });

  button.addEventListener("mouseenter", function () {
    res.textContent = "Mouse on me!";
  });

  button.addEventListener("mouseleave", function () {
    res.textContent = "Mouse is not on me!";
  });
});
