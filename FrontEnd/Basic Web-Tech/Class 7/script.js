//! Array
let arr = [10, 20, true, undefined, null, "hello", 30];
// console.log(typeof arr);
// console.log(arr[2]);


//! Object
let person = {
    name: "John",
    age: 30,
    isStudent: true,
}
// console.log(typeof person);
// console.log(person["name"]);
// console.log(person.age);

//! Function
function greet() {
    console.log("Hello, World!");
}
// greet();

const person2 = {
    name: "Alice",
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}
// console.log(person2.address.city);
// person2.greet();
// console.log(person2.name);

//! Operators
let a = 10;
let b = 5;
let c = '10'
// console.log(a == b)
// console.log(a == c)
// console.log(a === c)
// console.log(a != b)
// console.log(a !== c)

//! Assignment Operators
let x = 10
x += 5 // x = x + 5
x -= 2 // x = x - 2
x *= 3 // x = x * 3
// x /= 2 // x = x / 2
x %= 4 // x = x % 4
x **= 2 // x = x ** 2
// console.log(x)

//! Logical Operators
let p = true;
let q = false;
// console.log(p && q) // AND
// console.log(p || q) // OR
// console.log(!p) // NOT

//! Unary Operators
let num = 5;
console.log(++num) // pre-Increment
console.log(num++) // post-Increment
console.log(num) // Increment
console.log(--num) // Decrement
console.log(num--) // Decrement
console.log(num) // Decrement