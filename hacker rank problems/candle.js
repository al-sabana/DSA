candles = [3, 2, 1, 3, 9, 10, 10];
let max = candles[0];
let find = 0;
for (let i = 1; i < candles.length; i++) {
  if (max < candles[i]) {
    max = candles[i];
  }
}
for (let i = 0; i < candles.length; i++) {
  if (max == candles[i]) {
    find += 1;
  }
}
console.log(find);
