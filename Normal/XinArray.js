let a = [50, 3, 45, 87, 12, 34];
let x = 3;
let output_str = "";
let isCheck = false;
for (i = 0; i <= a.length; i++) {
  if (x === a[i]) {
    output_str = x + "is found in the array";
    isCheck = true;
  }
}
if (isCheck === false) {
  output_str = x + "is not found in the array";
}
console.log(output_str);
