let sum = "";
for (let i = 0; i < n; i++) {
  sum += "#";
  let space = "";
  for (let j = n - i - 1; j >= 1; j--) {
    space += " ";
  }
  console.log(space + sum);
}
