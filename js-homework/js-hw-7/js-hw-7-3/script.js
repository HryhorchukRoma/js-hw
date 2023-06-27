const button1 = document.querySelector("#button1");
button1.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

const button2 = document.querySelector("#button2");
button2.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "pink";
});

const button3 = document.querySelector("#button3");
button3.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "brown";
});
button3.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
});

const link = document.querySelector("#link");
link.addEventListener("mouseenter", () => {
  document.body.style.backgroundColor = "yellow";
});
link.addEventListener("mouseleave", () => {
  document.body.style.backgroundColor = "white";
});
