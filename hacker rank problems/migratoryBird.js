let array = [0, 0, 0, 0, 0];
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 1) {
    array[0]++;
  }
  if (arr[i] == 2) {
    array[1]++;
  }
  if (arr[i] == 3) {
    array[2]++;
  }
  if (arr[i] == 4) {
    array[3]++;
  }
  if (arr[i] == 5) {
    array[4]++;
  }
}
console.log(array.indexOf(Math.max(...array)) + 1);
