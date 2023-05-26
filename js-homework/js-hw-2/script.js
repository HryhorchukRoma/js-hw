//завдання один

// let a=1, b=2, c=3;
// console.log((a<b&&b<c)? true: false)


//завдвання два

// const x=1, y=2, res1=(String(x)+String(y)), res2=(Boolean(x)+String(y)),
// res3=(Boolean(y-x)), res4=((x-x)/(y-y));
// console.log(res1, typeof(res1))
// console.log(res2, typeof(res2))
// console.log(res3, typeof(res3))
// console.log(res4, typeof(res4))


//завдання три

// const isAdult=prompt("How old are you?")
// if(isAdult>=18){
//     console.log('Ви досягли повнолітнього віку')
// }
// else {
//     console.log('Ви ще надто молоді')
// }


//завдання чотири

// let arr= [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// function removeDuplicates(array) {
//     let uniqueArray = [];
    
//     for (let i = 0; i < array.length; i++) {
//       if (uniqueArray.indexOf(array[i]) === -1) {
//         uniqueArray.push(array[i]);
//       }
//     }
    
//     return uniqueArray;
//   }
//   let result = removeDuplicates(arr);
//   console.log(result);  


//завдання п'ять

// const a=parseInt(prompt('Enter a:'))
// const b=parseInt(prompt('Enter b:'))
// const c=parseInt(prompt('Enter c:'))
// if(a>0 && b>0 &&c>0){
//   const p=(a+b+c)/2
//   console.log((Math.round(1000*(Math.sqrt(p*(p-a)*(p-b)*(p-c)))))/(1000))
//   if(a*a+b*b===c*c || a*a+c*c===b*b || b*b+c*c===a*a) console.log("triangle has 90 degrees corner")
//   else console.log('It`s usual')
// }
// else console.log("incorrect data")

//завдання шість

// const a=parseInt(prompt("Enter a:")), 
// b=parseInt(prompt("Enter b:")),
// op=parseInt(prompt("Enter op:"));
// let sum;
// function calc(a, b, op){
//   switch (op){
//     case 1: sum=(a-b);
//     break;
//     case 2: sum=(a*b);
//     break;
//     case 3: sum=(a/b);
//     break;
//     default: sum=(a+b)
//   }
//   return sum;
// }
// console.log(calc(a, b, op))