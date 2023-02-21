let n = 15;
for (let i = 1; i <= n; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Superstar Rajnikanth");
  } else if (i % 3 == 0) {
    console.log("Superstar");
  } else if (i % 5 == 0) {
    console.log("Rajnikanth");
  } else {
    console.log(i);
  }
}
