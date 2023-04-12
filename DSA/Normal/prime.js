// find the prime numbers

let n = 21;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    console.log("not a prime number");
    break;
  } else if (n % 1 == 0 && n % n == 0) {
    console.log("prime number");
    break;
  }
}
