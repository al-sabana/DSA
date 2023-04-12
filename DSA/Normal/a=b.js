// 1. Given 2 numbers it should print if they are equal or not equal,
// let a = 10;
// let b = 20;
// It should either a is equal to b or a is NOT equal to b

// let a = 10;
// let b = 20;
// if (a === b) {
//   console.log("it is equal");
// } else {
//   console.log("not equal");
// }

// let n = 4;
// let str = "";
// let space = "";

// // for (let i = 1; i <= 4; i++) {
// //   str = i;

// //   for (let j = i; j <= i; j++) {
// //     space += " ";
// //   }
// // }
// for (let k = 3; k >= 1; k--) {
//   let rever = "";
//   rever += k;
//   console.log(rever);
// }
let n = 4;
for (let i = 1; i <= n; i++) {
  let str = "";

  for (let k = 1; k <= n - i + 1; k++) {
    str += " ";
  }
  for (let j = 1; j <= i; j++) {
    str += i + " ";
  }
  console.log(str);
}
