// 1           1
// 1 2       2 1
// 1 2 3   3 2 1
// 1 2 3 4 3 2 1

// let str = "";
// let space = "";
// for (let i = 1; i <= n; i++) {
//   str += i + " ";
//   for (let j = i; j >= 1; i--) {
//     space += " ";
//   }

// }
// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let str = " ";
//   for (let j = i - 1; j >= 1; j++) {
//     str += i;
//   }
//   console.log(str);
// }

/*
 1
  2
    3
      4
        3
          2
            1
*/
// let n = 4;

// let space = "";
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   str += i;
//   for (let j = i; j <= i; j++) {
//     space += " ";
//     console.log(space + str);
//   }
// }

// for (let k = 3; k >= 1; k--) {
//   let num = "";
//   num += k;
//   let spacer = "";
//   for (let m = 1; m <= n - k + n; m++) {
//     spacer += " ";
//   }
//   console.log(spacer + num);
// }
// let n = 6;
// function staircase(n) {
//   // Write your code here

//   for (let i = 5; i > 1; i--) {
//     let space = "";
//     space += " ";
//   }
//   for (let j = 1; j <= n; j++) {
//     let str = "";
//     str += j;
//   }
//   return str;
// (let j = n - i; j > 1; j--)
// }
// console.log(str);
let n = 6;
let sum = " ";
for (let i = 1; i <= n; i++) {
  sum += "#";
  let space = " ";
  for (let j = n - i + 1; j > 1; j--) {
    space += " ";
  }
  console.log(space + sum);
}
