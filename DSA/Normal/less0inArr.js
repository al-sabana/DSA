let array = [12, -1, 86, -3, -4, 13];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    sum += array[i];
  }
}
console.log(sum);
