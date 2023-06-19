// 1.
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і
// два числа(first и second) – порядкові номери елементів масиву, які необхідно
// скласти.Наприклад, якщо ввели 3 та 5 – сумуються 3 - й та 5 - й елементи.Функція
// повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел
// або обидва більшого розміруза довжину масиву.Напишіть код, який використовує
// цю функцію, передбачте обробку можливих винятків.

// 2.
// Створіть функцію checkAge(), яка запитує у користувача його ім'я,
// вік та статус(адмін, модератор, користувач) та генерує модальне вікно з помилкою,
//     якщо:вік користувача менше 18 або більше 70 років(генерується помилка типу RangeError).
//     користувач не ввів жодних даних в будь - якому полі(виводиться повідомлення The field is empty!
//         Please enter your age з типом помилки Error).У полі статус введено неправильне
// слово(тип помилки EvalError).в полі вік введено нечислове значення.У всіх інших випадках
// користувач отримає доступ до перегляду фільму.У блоці catch передбачена можливість виведення
// назви та опису помилки.
// 3.
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина
// прямокутника width і висота прямокутника height і обраховує його площу.Передбачити
// припинення виконання програми і генерацію винятку у випадку, якщо функції передано
// не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
// 4.
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує
// поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в
// році.Функція повертає назву місяця відповідно до введеного номера місяця.У випадку некоректного
// вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number


// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає
// об’єкт, який містить значення переданої id.Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
//     перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
//     в разі виключної ситуації виводить повідомлення про помилку.Функція showUsers(ids)
//         повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

// 2.
// Створіть функцію checkAge(), яка запитує у користувача його ім'я,
// вік та статус(адмін, модератор, користувач) та генерує модальне вікно з помилкою,
//     якщо:вік користувача менше 18 або більше 70 років(генерується помилка типу RangeError).
//     користувач не ввів жодних даних в будь - якому полі(виводиться повідомлення The field is empty!
//         Please enter your age з типом помилки Error).У полі статус введено неправильне
// слово(тип помилки EvalError).в полі вік введено нечислове значення.У всіх інших випадках
// користувач отримає доступ до перегляду фільму.У блоці catch передбачена можливість виведення
// назви та опису помилки.


//завдання один

// const array = [1, 2, 3, 4, 5, 5, 6, 7.8, 9]
// const a = 2, b = 7

// function sumSliceArray(arr, first, second) {
//     if ((first < 0 || second < 0)||(typeof first!='number' || typeof second!= 'number')) return -1;
//     if (first + 1 >= arr.length || second > arr.length) return -1;
//     const sum = arr[first] + arr[second];
//     return sum;
// }

// if (sumSliceArray(array, a, b) != -1) console.log(sumSliceArray(array, a, b));
// else console.log('wrong input')


//завдання два

const login='nigga', age=44, stat='модератор'
function checkAge(name, age, stat) {
    try {
        if (typeof name!= 'string' || typeof age!= 'number' || typeof stat!='string') throw Error;
        if (age < 18 || age > 70) throw RangeError;
        if (stat != 'адмін' && stat != 'модератор' && stat != 'користувач') throw EvalError;
        throw 'good';
    }
    catch (ans) {
        if (ans == Error) {return 'the field is empty! Please enter youre age'};
        if (ans == RangeError) return 1;
        if (ans == EvalError) return 2;
        if (ans == 'good') return 'You have acces';
    }
}

console.log(checkAge(login, age, stat))