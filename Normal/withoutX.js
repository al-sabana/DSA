// 3.. For a given positive integer n, it should print every number from 1 to n except x
// for eg:
// let n = 10;
// let x = 5;
// Your program should print 1 2 3 4 6 7 8 9 10
// (everything from 1 to 10 except 5)

// let n = 10;
// let x = 5;
// for (i = 1; i <= n; i++) {
//   if (i !== x) {
//     console.log(i);
//   }
// }
// let str = "";
// for (let i = 1; i < 5; i++) {
//   str = str + i + " ";
//   console.log(str);
// }
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   console.log(space(n - i + 1) + numseq(i));
// }

// function numseq(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str += i + " ";
//   }
//   return str;
// }
// function space(n) {
//   let space = "";
//   for (let i = n; i >= 0; i--) {
//     space += " ";
//   }
//   return space;
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
let n = 4;
for (let i = 1; i <= n; i++) {
  console.log(space(n - 1 + i) + num(i));
}
function num(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = i;
  }
  return str;
}
function space(n) {
  let space = " ";

  for (let j = i; j <= 0; j++) {
    space = ".";
  }
  return space;
}
