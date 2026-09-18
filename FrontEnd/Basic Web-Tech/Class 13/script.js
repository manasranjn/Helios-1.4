// console.log("One");
// console.log("Two");
// console.log("Three");
// setTimeout(() => {
//     console.log("Four");
// }, 1000)
// setTimeout(() => {
//     console.log("Five");
// }, 100)
// console.log("Six");


// ()=>{
//     ()=>{
//         ()=>{
//             ()=>{

//             }
//         }
//     }
// }


// fetch('url')
//     .then((res) => {
//         console.log(res);

//     }).catch((err) => {
//         console.log(err);

//     })

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        console.log(res);
        res.json()
            .then((data) => {
                console.log(data);
            })

    }).catch((err) => {
        console.log(err);

    })