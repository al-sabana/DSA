//    1
//   2 2
//  3 3 3
// 4 4 4 4
//  3 3 3
//   2 2
//    1

let n = 4;
for (let i = 1; i <= n; i++) {
  let run = "";
  for (let j = 1; j <= n - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= i; k++) {
    run += i + " ";
  }
  console.log(run);
}
for (let i = n - 1; i >= 1; i--) {
  let run = "";
  for (let j = 1; j <= n - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= i; k++) {
    run += i + " ";
  }
  console.log(run);
}
