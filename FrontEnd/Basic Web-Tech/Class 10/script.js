//! String and it's inbuilt methods
let name = 'Smith'
// console.log('Hey', name, 'Good afternoon');

//? String literals
// console.log(`Hey`, name, `good afternoon`);

//? Template literal
// ${name}
// console.log("Hey ${name}");
// console.log(`Hey ${name}`);

let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
//? toUpperCase()
// console.log(str.toUpperCase());

//? toLowerCase()
// console.log(str.toLowerCase());

//? slice(startIdx, endIndx)
let subStr = str.slice(2, 10)
// console.log(subStr);

//? length
// console.log(str.length);

//? split(condition)
let arr = str.split('')
// console.log(arr);

//? carAt()
// console.log(str.charAt(10));

//? replace(searchVal, newval)
// let newStr = str.replace('o', 'oo')
// console.log(newStr);

//? replaceAll()
// let newStr = str.replaceAll('o', 'oo')
// console.log(newStr);

//! DOM
// console.log(window);
// console.log(document);


//! DOM Selection methods
//? getElementById()
const heading = document.getElementById('head')
// console.log(heading);

//? getElementsByClassName()
const headings = document.getElementsByClassName("heading")
// console.log(headings);

//? getElementsByTagName()
const nodes = document.getElementsByTagName('h2')
// console.log(nodes);

//? getElementsByName()
let formNodes = document.getElementsByName('submit')
// console.log(formNodes);

//? querySelector()
const node1 = document.querySelector('#head')
// console.log(node1);
const node2 = document.querySelector('.heading')
// console.log(node2);
const node3 = document.querySelector('h2')
// console.log(node3);

//? querySelectorAll()
const node4 = document.querySelectorAll('.heading')
// console.log(node4);
const node5 = document.querySelectorAll('h2')
// console.log(node5);

const node6 = document.querySelector('.box h2')
// console.log(node6);
