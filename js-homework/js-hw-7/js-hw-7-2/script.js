function changeCSS() {
  let paragraph = document.getElementById("text");
  paragraph.style.color = "orange";
  paragraph.style.fontSize = "20px";
  paragraph.style.fontFamily = "Comic Sans MS";
}

let button = document.querySelector("button");

button.addEventListener("click", changeCSS);
