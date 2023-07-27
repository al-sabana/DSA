let i = 10;
while (i > 0) {
  i--;
}

//  arr.pop

let arr = [1, 3, 5, 7, 9, 11];
let length = arr.length;
for (let i = 0; i < length; i++) {
  let pop = arr.pop();
  //   console.log(pop);
}

// for of loop

let array = [1, 3, 5, 7, 9, 11];
//  a means variable we can create any variable instead of a
for (i of array) {
  //   console.log(i);
}

// Function
function multiplication(length, multiple) {
  for (let i = 1; i <= length; i++) {
    // console.log(i + "*" + multiple + "=" + i * multiple);
  }
}
multiplication(10, 9);

// remove from array
let ar = [1, 2, 3, 4, 5];
let out;
for (let i = 0; i < ar.length; i++) {
  if (ar[i] == 2) {
    out = i;
  }
}
console.log(out);

let str = "Hi how Are You";
// let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let al = " ";

let output = "";

for (let j = 0; j < str.length; j++) {
  if (!str[j].includes(al)) {
    output += str[j];
  }
}
console.log(output);
