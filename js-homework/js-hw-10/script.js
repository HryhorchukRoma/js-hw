//task 1

// let names = {
//     first: "Tom",
//     second: "Sam",
//     third: "Ray",
//     fourth: "Bob",
// };

// let { first: f, second: s, third: x, fourth: t, fifth = "Name №5" } = names;

// console.log(f);
// console.log(x);
// console.log(fifth);

//task 2

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };

// let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;

// console.log(name2); 
// console.log(age2);
// console.log(name4);
// console.log(age4);

//task 3

// function mul(...args) {
//    return args.filter(arg => typeof arg === 'number').reduce((acc, curr) => acc * curr, 0);
// }

// console.log(mul(1, "str", true));
// console.log(mul(null, "str", false, true)); 

//task 4

// let server = {
//     data: 0,
//     convertToString: function (callback) {
//        callback(() => {
//           return this.data + "";
//        });
//     }
//  };
//  let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//        this.server.data = data;
//        this.server.convertToString(this.notification());
//     },
//     notification: function () {
//        return (callback) => {
//           this.result = callback();
//        };
//     }
//  };
//  client.calc(123);
//  console.log(client.result);
//  console.log(typeof client.result);