// let ar = [3, 4, 6, 1, 2, 4];
// let k = 4;
// let b = 0;
// for (let i = 0; i < ar.length; i++) {
//   if (k === ar[i]) {
//     b = b + 1;
//   }
// }
// console.log(b);
let array = [12, -1, 86, -3, -4, 13, 0];
let sum = 0;
let zero = 0;
let positive = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    sum += array[i];
  }
}
console.log(sum);
console.log(zero);
console.log(positive);
