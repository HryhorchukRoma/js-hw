// Реалізувати логіку підрахунку ціни товару по його варіаціях
//(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

const color = document.querySelectorAll(".color");
const field = document.querySelector("#outprice");
const img = document.querySelectorAll(".shoe");
const newtxt = document.querySelector(".new");
const notnewtxt = document.querySelector(".notnew");
let count = 0;

color.forEach((item) => {
  item.addEventListener("click", () => {
    color.forEach((check) => {
      if (check.classList.value == "color active") {
        check.classList.remove("active");
      }
    });
    item.classList.add("active");
    switch (item.getAttribute("color")) {
      case "blue":
        field.textContent = `${item.getAttribute("data-price") - 1}.99`;
      case "red":
        field.textContent = `${item.getAttribute("data-price") - 1}.99`;
      case "green":
        field.textContent = `${item.getAttribute("data-price") - 1}.99`;
      case "orange":
        field.textContent = `${item.getAttribute("data-price") - 1}.99`;
      case "black":
        field.textContent = `${item.getAttribute("data-price") - 1}.99`;
    }
  });
});
// function checkImg(i) {
//   img.forEach((item) => {
//     if (i.classList.value == "shoe show") {
//       i.classList.remove("show");
//     }
//   });
// }
// newtxt.addEventListener("click", () => {
//   if (count % 2 == 0) {
//     newtxt.style = "background-color: red";
//     field.textContent=='nigga';
//   } else newtxt.style = "";
//   count++;
// });
