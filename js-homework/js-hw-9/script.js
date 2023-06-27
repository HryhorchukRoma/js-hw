// Для заданої сторінки знайдіть всі <h2> з
// класом head, зробіть
// для них зелений колір фону,
// потім серед знайдених елементів
// знайдіть елементи з класом inner
// і поставте їм розмір шрифту 35px.

const head = [...$(".head")];
const inner = [...$(".inner")];
console.log(head);

head.forEach((item) => {
  item.style = "background-color:green";
});
inner.forEach((item) => {
  item.style = "font-size: 35px";
});

//На HTML-сторінці є посилання <a>. У випадку коли,
//href починається на https://,
//потрібно додати посиланню атрибут target="_blank".

const a = [...$("a")];
console.log(a);

a.forEach((item) => {
  if (item.getAttribute("href") === "https://") {
    item.setAttribute("target", "_blank");
  }
});

// Знайдіть теги <div>, які стоять безпосередньо
// після <h3> і
// перемістіть кожен <div>-елемент так, щоб
// він став безпосередньо над <h3>.
$("h3").each(function () {
  let nextDiv = $(this).next("div");
  $(this).before(nextDiv);
});

//На HTML-сторінці є 6 чекбоксів.
// Напишіть скріпт, який після того,
// як користувач позначив будь-які
// 3 чекбокси, всі чекбокси робить
// неактивними.

const checkboxes = $("input[type='checkbox']");

checkboxes.change(function () {
  let checkedCount = checkboxes.filter(":checked").length;
  if (checkedCount >= 3) {
    checkboxes.prop("disabled", true);
  }
});
