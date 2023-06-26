//задання один

// function showListItems() {
//             const list = document.getElementById('list');
//             const items = document.getElementsByTagName('li');

//             let output = "";
//             output += items[0].textContent + "\n";
//             output += items[items.length - 1].textContent + "\n";
//             output += items[1].textContent + "\n";
//             output += items[3].textContent + "\n";
//             output += + items[2].textContent + "\n";

//     res.textContent = output;
// }

// const res=document.querySelector('.res')
// const call = document.querySelector('.button')
// const modWindow = document.querySelector('.window')
// const cross=document.querySelector('.cross')
// call.addEventListener('click', () => {
//     modWindow.classList.replace('window', 'active__window');
//     showListItems()
//     cross.addEventListener('click', () => {
//         modWindow.classList.replace('active__window', 'window');
//     })
// })

//завдання два

const first = document.querySelector("h1");
const p = document.querySelectorAll("p");
const list = document.querySelector("#myList");
const invise = document.querySelector(".invise");

first.style = "background-color: lime; width: 280px;";
p[0].style = "font-weight: bold;";
p[1].style = "color: red;";
p[2].style = "text-decoration : underline;";
p[3].style = "font-style : italic;";
list.style = "display: flex; list-style: none;";
invise.style = "opacity : 0;";
