//завдання один

// let arr= [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// function compact(array) {
//     let uniqueArray = [];
    
//     for (let i = 0; i < array.length; i++) {
//       if (uniqueArray.indexOf(array[i]) === -1) {
//         uniqueArray.push(array[i]);
//       }
//     }
    
//     return uniqueArray;


//завдання два

// const a = parseInt(prompt('Enter a(the begining of array)')),
// b=parseInt(prompt('Enter b(the end of array)'))

// function createArray(start, end) {
//     let newArr=[];
//     for (let i = 0, counter =start; i < end; i++, counter++) {
//         newArr[i] = counter;
//     }
//     return newArr;
// }
// console.log(createArray(a, b))


//завдання три

//const a = parseInt(prompt('Enter a(the begining of array)')),
// b=parseInt(prompt('Enter b(the end of array)'))
// function runner(start, item) {
//     let newArr2 = [];
//     for (let i = 0, a=start; i<item; i++, )
// }
// function bigArr(start, end) {
//     let newArr = [];
//     for (let i = 0, a = start; i < end; i++, a++){
//         newArr[i] = ;
//     }
//     return newArr;
// }
// console.log(bigArr(a, b))


//завдання чотири

//const a = parseInt(prompt('Enter size of array:')),

// function randArray(length) {
//     let newArr = [];
//     for (let i = 0; i < length; i++){
//         newArr[i]=Math.round((Math.random()*499)+1)
//     }
//     return newArr;
// }

// console.log(randArray(a))



//завдання п'ять

const array = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun']
function sort(arr) {
    let array=[...arr]
    let numArr = [], strArr = [];
    array.forEach(i => {
        if (typeof (array[i] === Number)) numArr += array[i];
        else if (typeof (array[i] === String)) strArr += array[i];
        else if (typeof (array[i] === Object)) {
            for (let j = 0; j < array[i].length; i++) {
                if (typeof (array[i] === Number)) numArr += array[i][j];
                else if (typeof (array[i] === String)) strArr += array[i][j];
            }
        }

    })
    return numArr, strArr;
}
console.log(sort(array))