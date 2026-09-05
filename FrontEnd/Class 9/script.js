//! Function
//? Pre-defined Function
// let name = prompt("Enter your name: ");
// console.log("Hello, " + name + "! Welcome to the program.");

// alert("Warning: This is a sample alert message.");
// let n = parseFloat(prompt("Enter a number: "));
// console.log("You entered: " + n, typeof n);

//? User-defined Function
//* Normal Function
function greetUser() {
    let name = prompt("Enter your name: ");
    console.log("Hello, " + name + "! Welcome to the program.");
}

// greetUser();

//* Arrow Function  
const sayHello = () => {
    console.log("Hello! This is an arrow function.");
}

// sayHello();

//* Anonymous Function
const showMessage = function () {
    console.log("This is an anonymous function.");
}

// showMessage();


//* Function without Parameters
function sum() {
    let a = 10
    let b = 5
    return a + b;
}
// let result = sum();
// console.log("The sum is: " + result);

//* Function with Parameters
function multiply(x, y) {
    return x * y;
}
// let result = multiply(10, 5);
// let result = multiply(10, 50);
// console.log("The product is: " + result);    

//* Function with Default Parameters
function greet(name = "Guest") {
    console.log("Hello, " + name + "! Welcome to the program.");
}

// greet('Bikash')

//* Callback Function
function processUserInput(callback) {
    let name = prompt("Enter your name: ");
    callback(name);
}

// processUserInput(function (name) {
//     console.log("Hello, " + name + "! Welcome to the program.");
// });

//? forEach()
let marks = [90, 80, 70, 60, 50];

// marks.forEach(function (mark, index) {
//     console.log("Mark " + (index + 1) + ": " + mark);
// });

// marks.forEach((mark, index) => {
//     console.log("Mark " + (index + 1) + ": " + mark);

// });

//! Array Inbuilt Function
//? map()

// let newMarks = marks.map((mark, index) => {
//     console.log("Mark " + (index + 1) + ": " + mark);

//     return mark + 5;
// });
// console.log(newMarks); 


//? filter()
let filteredMarks = marks.filter((mark, index) => {
    // if (mark >= 60) {
    //     return mark;
    // }

    return mark > 70
});
// console.log(filteredMarks);

//? reduce()
// let total = marks.reduce((mark, sum) => mark + sum, 0);
// console.log("The sum of marks is: " + total);

//? sort()
let mark = [40, 70, 80, 55, 70, 90, 60, 50];
// let sortedMarks = mark.sort((a, b) => a - b); //ascending order
//[40, 55, 70, 80, 60,50, 90]
//[40,55, 70,60, 50, 80,90]
//[40, 55, 60, 50, 70, 80, 90]
//[40,55,50,60..]
//[40, 50, 55, 60, 70, 80, 90]
// let sortedMarks = mark.sort((a, b) => b - a); //descending order
// console.log(sortedMarks);

//? find()
let foundMark = mark.find((mark) => mark > 60);
// console.log(foundMark);

//? findIndex()
let foundIndex = mark.findIndex((mark) => mark > 60);
// console.log(foundIndex);

//? push()
// mark.push(100, true, "Hello");
// console.log(mark);

//? pop()
// mark.pop();
// console.log(mark);

//? shift()
// mark.shift();
// console.log(mark);

//? unshift()
// mark.unshift(100, true, "Hello");
// console.log(mark);

//? slice()
let slicedMarks = mark.slice(2, 5);
// console.log(slicedMarks);

//? splice(startIndex, deleteCount, item1, item2, ...)
//* Insert
// mark.splice(2, 0, 100, 200, 300);
// console.log(mark);

//* Delete
// mark.splice(1, 3);
// console.log(mark);

//* Replace
// mark.splice(1, 2, 100, 200, 300);
// console.log(mark);

//? concat()
let newMark = [100, 200, 300];
// let combinedMarks = mark.concat(newMark);
// console.log(combinedMarks);

//? includes()
// let isIncluded = mark.includes(900);
// console.log(isIncluded);

//? indexOf()
// let index = mark.indexOf(70);
// console.log(index);

//? lastIndexOf()
// let lastIndex = mark.lastIndexOf(70);
// console.log(lastIndex);

//? reverse()
// let reversedMarks = mark.reverse();
// console.log(reversedMarks);

let strArr = mark.toString();
console.log(strArr, typeof strArr);