


// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке
//id і повертає
// об’єкт, який містить значення переданої id.Також функція викидає
//помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив
//користувацьких айді ids,
//     перевіряє з використанням функції showUser() кожен елемент
//масиву ids на коректність,
//     в разі виключної ситуації виводить повідомлення про помилку.
//Функція showUsers(ids)
//         повертає масив об’єктів, де значеннями ключів є к
//оректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]


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

// const login='nigga', age=44, stat='модератор'
// function checkAge(name, age, stat) {
//     try {
//         if (typeof name!= 'string' || typeof age!= 'number' || typeof stat!='string') throw Error;
//         if (age < 18 || age > 70) throw RangeError;
//         if (stat != 'адмін' && stat != 'модератор' && stat != 'користувач') throw EvalError;
//         throw 'good';
//     }
//     catch (ans) {
//         if (ans == Error) {alert('The field is empty! Please enter your age')};
//         if (ans == RangeError) {
//             if (age < 18) alert('You are too young!');
//             else alert('you are too old!')
//         };
//         if (ans == EvalError) alert('you have no acces');
//         if (ans == 'good') alert('You have acces');
//     }
// }

// checkAge(login, age, stat)


//завдання три

// function calcRectangleArea(width, height) {
//     try {
//         if (width <= 0 || height <= 0) throw RangeError;
//         if (typeof height != 'number' || typeof width != 'number') throw TypeError;
//         throw 'good';
//     }
//     catch (res){
//         if (res == TypeError) alert('Wrong type!')
//         if (res == RangeError) alert('wrong number')
//         if (res == 'good') alert(`Triangle's area is ${width / 2 * height}`)
//     }
// }

// calcRectangleArea(10, 10)


// 4.
// Створіть клас MonthException, конструктор якого приймає
//параметр message і ініціалізує
// поле name значенням MonthException.
// Реалізуйте функцію , в якій параметр
//month – це порядковий номер місяця в
// році.Функція повертає назву місяця відповідно до введеного
//номера місяця.У випадку некоректного
// вводу кидається ексепшн у вигляді об’єкта класу MonthException
//з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку
//можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number

//завдання чотири

// class MonthException{
//     constructor(message) {
//         this.name = message;
//     }
// }

// function showMonthName(month) {
//     switch(month){
//         case 1: return 'January'
//         case 2: return 'February'
//         case 3: return 'March'
//         case 4: return 'April'
//         case 5: return 'May'
//         case 6: return 'June'
//         case 7: return 'July'
//         case 8: return 'August'
//         case 9: return 'September'
//         case 10: return 'October'
//         case 11: return 'November'
//         case 12: return 'December'
//         default:
//     }
// }

// console.log(showMonthName(5))


//завдання п'ять

// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке
//id і повертає
// об’єкт, який містить значення переданої id.Також функція викидає
//помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив
//користувацьких айді ids,
//     перевіряє з використанням функції showUser() кожен елемент
//масиву ids на коректність,
//     в разі виключної ситуації виводить повідомлення про помилку.
//Функція showUsers(ids)
//         повертає масив об’єктів, де значеннями ключів є к
//оректні елементи ids.


// function showUser(id) {
//     if (id > 0) return { id: id }
// }


// const ids = [1, -2, 3, -4, -10, 11, 10]

// function showUsers(ids) {
//     for (let i = 0; i < ids.length; i++){
//         if (ids[i] <= 0) {
//             ids.splice(i, 1);
//         }
        
//     }    
//     for (let j = 0; j < ids.length; j++){
//         let arr = [];
//         arr[j] = showUser(ids[j])
//         console.log(arr[j])
//     }
// }

// showUsers(ids)