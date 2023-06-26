// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const btn = document.querySelector('.btn');
const inputs = document.querySelectorAll('.arr');
const out = document.querySelector('.out');
const arr = [];
    inputs.forEach((item) => {
        item.addEventListener('change', (e) => {
            //arr.push(e.target.value);
            console.log(e.target.value);
        })
    })


btn.addEventListener('click', () => {
    
    console.log(arr);
    arr.forEach((item) => {
        out.innerHTML += `
        <p>${item}</p>
        `
    })
})