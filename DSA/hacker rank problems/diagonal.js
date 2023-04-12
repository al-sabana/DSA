let arr = [[11, 2, 4][(4, 5, 6)], [10, 8, -12]];
function diagonalDifference(arr) {
  // Write your code here
  let right = 0;
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    left += arr[i][i];
    right += arr[i][arr.length - 1 - i];
  }

  return Math.abs(left - right);
}
