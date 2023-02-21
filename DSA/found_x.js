let a = [5, 10, 10, 2, 18];
let x = 10;
let b = 0;
for (i = 0; i <= a.length; i++) {
  if (x === a[i]) {
    b = b + 1;
  }
}
if (b === 1) {
  console.log(x + "is found 1 time");
} else if (b != 0) {
  console.log(x + " is found " + b + " times");
} else {
  console.log(x + " is not found");
}
