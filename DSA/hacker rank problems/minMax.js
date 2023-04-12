let arr = [1, 2, 3, 4, 5];
let minMax = [];
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  let x = arr[i];
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  let y = sum - x;
  minMax.push(y);
}
console.log(minMax);

let min = minMax[0];
let max = minMax[0];
for (let i = 1; i < minMax.length; i++) {
  if (min > minMax[i]) {
    min = minMax[i];
  } else if (max < minMax[i]) {
    max = minMax[i];
  }
}
console.log(min, max);
