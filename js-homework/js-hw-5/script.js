//завдання один

// class Circle{
//     constructor(x, y, r) {
//         this.x = x;
//         this.y = y;
//         this.rad = r;
//     }
//     L() {
//         return 2 * Math.PI * rad;
//     }
// }

// const circle = new Circle(1, 2, 5);
// console.log(circle.L)


//завдання два

// const user = {
//     kill: true,
//     hp: 100,
//     armor: 200
// }
    
// function propsCount(user) {
//     return Object.keys(user).length;
// }
// console.log(propsCount(user))

//завдання три

// class Person{
//     constructor(name, surname) {
//         this.names = name;
//         this.surname = surname;
//     }
//     showFullName() {
//         console.log(this.names + ' ' + this.surname);
//     }
// }

// const person = new Person('Roman', 'Hryhorchuk')
// person.showFullName()

// class Student extends Person{
//     constructor(names, surname,midName, year) {
//         super(names, surname);
//         this.year = year;
//         this.midName = midName;
//     }
//     showFullName() {
//         super.showFullName();
//         console.log(this.names + ' ' + this.midName + ' ' + this.surname + ' ' + this.year + ' ' + this.showCourse());
//     }
//     showCourse() {
//         const currentDay = new Date();
//         const thisYear = currentDay.getFullYear();
//         if (thisYear - this.year >= 1 && thisYear - this.year <= 6) return(thisYear - this.year + ' course');
//         else return('You are not in Univercity')
//     }

// }
// const student = new Student('Roman', 'Hryhorchuk', 'Vasylovuch', 2022)
// student.showFullName()

//задання чотири

// class Marker {
//     constructor(color, amount, print) {
//         this.color = color;
//         this.amount = amount;
//         this.text = print;
//         this.am_of_sym = amount * 2;
//     }
//     getColor() {
//         return (this.text + ' is ' + this.color);
//     }
//     print() {
//         const am_of_spaces = (this.text.match(' ') || 0);
//         if ((this.am_of_sym + am_of_spaces) >= this.text.length ){
//             console.log(this.text);
//             this.amount -= (this.text.length - am_of_spaces) / 2;
//             return
//         }
//         let buff = '';
//             for (let i = 0; i < this.am_of_sym; i++) {
//                 if (this.text[i] === ' ') {
//                     this.am_of_sym++;
//                     buff += this.text[i];
//                     continue;
//                 }
//                 buff += this.text[i];
//                 this.amount -= 0.5;
//             }
//         this.text = buff;
//         console.log(this.text);
//     }
//     fill_it(amount){
//         amount += ((this.amount + amount) <= 100) ? this.amount + amount : 100;
//     }
// }
// const marker = new Marker('red', 8, 'hello world')
// marker.print()