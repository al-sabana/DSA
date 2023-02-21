// JSON represention
// For students database
// name, age,stipend marks for 3 subjects, maths, physics and chemistry.
// 0. Given a name find it in the array of students.
// 1. a. Find the eldest student, it should print the name of the student,
//  b. find the student who earns the least stipend
// 2. Find the students whose physics score is more than 70
// 3. Count the number of students whose total average is more than 70.

// let array be--------------
let array = [
  {
    name: "alsabana",
    age: 19,
    salary: 3000,
    marks: { maths: 90, physics: 95, chemistry: 100 },
  },
  {
    name: "razak",
    age: 18,
    salary: 10000,
    marks: { maths: 70, physics: 55, chemistry: 90 },
  },
  {
    name: "vani",
    age: 20,
    salary: 10500,
    marks: { maths: 80, physics: 75, chemistry: 80 },
  },
  {
    name: "gowtham",
    age: 15,
    salary: 100,
    marks: { maths: 90, physics: 85, chemistry: 90 },
  },
  {
    name: "selva",
    age: 31,
    salary: 15000,
    marks: { maths: 90, physics: 75, chemistry: 80 },
  },
  {
    name: "muthu",
    age: 17,
    salary: 10000,
    marks: { maths: 70, physics: 65, chemistry: 90 },
  },
  {
    name: "Ishu",
    age: 23,
    salary: 10000,
    marks: { maths: 82, physics: 84, chemistry: 88 },
  },
  {
    name: "razak",
    age: 19,
    salary: 10000,
    marks: { maths: 90, physics: 50, chemistry: 69 },
  },
  {
    name: "razak",
    age: 14,
    salary: 10000,
    marks: { maths: 75, physics: 69, chemistry: 50 },
  },
];

// Question 0 -
// find the name in the jason
let naMe = "alsabana";
let nameCount = 0;

for (let i = 0; i < array.length; i++) {
  if (naMe === array[i]["name"]) {
    nameCount = nameCount + 1;
    break;
  }
}
if (nameCount === 1) {
  console.log(naMe + " is found in the array ");
} else {
  console.log(naMe + " is not found in the array ");
}

// Output : rashmika is not found in the array
// -------------------------------------------------------------------------
// Question 1. a. Find the eldest student, it should print the name of the student

// let eldestStudent = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (eldestStudent["age"] < array[i]["age"]) {
//     eldestStudent = array[i];
//   }
// }
// console.log(
//   eldestStudent["name"] + " is the eldest one of  age  " + eldestStudent["age"]
// );
// Output = alsabana is the eldest one of  age  31
// -------------------------------------------------------------------------

// Question 1. b. find the student who earns the least stipend
// let leastStipend = array[0];
// for (let i = 1; i < array.length; i++) {
//   if (leastStipend["salary"] > array[i]["salary"]) {
//     leastStipend = array[i];
//   }
// }
// console.log(
//   leastStipend["name"] +
//     " is getting  the least amount  of  salary of   " +
//     leastStipend["salary"]
// );
// Output // gowtham is getting  the least amount  of  salary of   100
// ---------------------------------------------------------------------------------

// Question 2. Find the students whose physics score is more than 70
// let students = "";
// for (let i = 0; i < array.length; i++) {
//   if (array[i]["marks"]["physics"] > 70) {
//     students += array[i]["name"] + ",";
//   }
// }
// console.log(students + " are the one who got more than 70 in physics");
// Output //abdul,razzkutty,gowtham,alsabana,Ishu, are the one who got more than 70 in physics

// ----------------------------------------------------------------------
// Question 3. Count the number of students whose total average is more than 70.
// let count = 0;

// for (let i = 0; i < array.length; i++) {
//   let mathMark = array[i]["marks"]["maths"];
//   let phyMark = array[i]["marks"]["physics"];
//   let cheMark = array[i]["marks"]["chemistry"];
//   let average = mathMark + phyMark + cheMark;
//   if (average / 3 > 70) {
//     count = count + 1;
//   }
// }
// console.log(count + " students got more than an average of 70");
// Output // 7 students got more than an average of 70
// -----------------------------------------------------------
