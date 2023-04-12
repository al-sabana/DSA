// Given an array, print the sum of all even numbers in the array
// let a = [4, 3, 17, 10, 11];
// it should print 14

let a = [4, 3, 17, 10, 11, 12];
let add = 0;
for (i = 0; i <= a.length; i++) {
  if (a[i] % 2 == 0) {
    add += a[i];
  }
}
console.log(add);
