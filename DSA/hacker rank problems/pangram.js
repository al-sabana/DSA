s = "We promptly judged antique ivory buckles for the next prize";
function pangrams(s) {
  // Write your code here
  let lower = s.toLowerCase();
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alpha.length; i++) {
    if (lower.includes(alpha[i]) === false) {
      return "not pangram";
    }
  }
  return "pangram";
}
