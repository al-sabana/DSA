let n = 6;
let k = 3;
let ar = [1, 3, 2, 6, 1, 2];
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = ar.length; j > i; j--) {
      if ((ar[i] + ar[j]) % k == 0) {
        result++;
      }
    }
  }
  return result;
}
