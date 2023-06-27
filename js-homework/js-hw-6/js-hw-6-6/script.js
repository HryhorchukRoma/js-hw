// Реалізувати логіку підрахунку ціни товару по його варіаціях
//(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

const color = document.querySelectorAll(".color");
const field = document.querySelector("#outprice");
const img = document.querySelectorAll(".shoe");
const newtxt = document.querySelector(".new");
const notnewtxt = document.querySelector(".notnew");
const background = document.querySelectorAll(".gradient");
const newSpan = document.querySelector('.new')

let count = 0;

color.forEach((item, index) => {
  item.addEventListener("click", () => {
    background.forEach((item) => {
      if(item.classList.value == "gradient second") {
        item.classList.remove("second")
      }
    })
    background[index].classList.add("second")
    img.forEach((item) => {
      if(item.classList.value == "shoe show") {
        item.classList.remove("show")
      }
    })
    img[index].classList.add("show")
    color.forEach((check) => {
      if (check.classList.value == "color active") {
        check.classList.remove("active");
      }
    });
    item.classList.add("active");
    switch (item.getAttribute("color")) {
      case "blue":
        field.textContent = `${Math.floor((item.getAttribute("data-price") - 1))}` + '.99';
      case "red":
        field.textContent = `${Math.floor((item.getAttribute("data-price") - 1))}` + '.99';
      case "green":
        field.textContent = `${Math.floor((item.getAttribute("data-price") - 1))}` + '.99';
      case "orange":
        field.textContent = `${Math.floor((item.getAttribute("data-price") - 1))}` + '.99';
      case "black":
        field.textContent = `${Math.floor((item.getAttribute("data-price") - 1))}` + '.99';
    }
  });
});

function renderPrice(x=1){
  let i;
  color.forEach((item, index) => {
    if (item.classList.value == "color active") {
      i = index;
    }
  });
  switch (color[i].getAttribute("color")) {
    case "blue":
      field.textContent = `${Math.floor((color[i].getAttribute("data-price") - 1) * x)}` + '.99';
    case "red":
      field.textContent = `${Math.floor((color[i].getAttribute("data-price") - 1) * x)}` + '.99';
    case "green":
      field.textContent = `${Math.floor((color[i].getAttribute("data-price") - 1) * x)}` + '.99';
    case "orange":
      field.textContent = `${Math.floor((color[i].getAttribute("data-price") - 1) * x)}` + '.99';
    case "black":
      field.textContent = `${Math.floor((color[i].getAttribute("data-price") - 1) * x)}` + '.99';
  }
}
let buff = false
newSpan.addEventListener('click', () => {
  if(buff){
    newSpan.style.backgroundColor = '#2175f5';
    buff = false
    newSpan.textContent = 'new';
    renderPrice()
  }
  else{
    newSpan.style.backgroundColor = 'rgb(252, 74, 26)'
    buff = true
    newSpan.textContent = 'old';
    renderPrice(0.7)
  }
})

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
