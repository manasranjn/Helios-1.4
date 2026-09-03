//! Conditional Statements

// let age = 70
// if (age >= 18) {
//     console.log("You are an adult.");
// }

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// if (age >= 18) {
//     console.log("You are an adult.");
// } else if (age >= 13) {
//     console.log("You are a teenager.");
// } else {
//     console.log("You are a child.");
// }

// if (age >= 1 && age < 18) {
//     console.log("You are a minor.");
// }
// if (age >= 18 && age <= 60) {
//     console.log("You are an adult.");
// } else if (age > 60 && age <= 100) {
//     console.log("You are a senior citizen.");
// } else {
//     console.log("You are dead.");
// }

// let choice = 2
// switch (choice) {
//     case 1:
//         console.log("You chose option 1.");
//         break;
//     case 2:
//         console.log("You chose option 2.");
//         break;
//     case 3:
//         console.log("You chose option 3.");
//         break;
//     default:
//         console.log("Invalid choice.");
// }

//! Loop
//? for loop
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

//? while loop
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

//? do while loop
// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

//? for of loop
let arr = [1, 2, 3, 4, 5];
// for (let num of arr) {
//     console.log(num);
// }

// let str = "Hello everyone"
// for (let s of str) {
//     console.log(s);
// }

//? for in loop
let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

// for (let key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }