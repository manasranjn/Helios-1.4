
const form = document.querySelector('form')
// console.log(form);

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     // console.log(e);
//     // console.log(e.type);
//     // console.log(e.target);

//     const name = document.getElementById('name').value
//     const email = document.getElementById('email').value
//     const pass = document.getElementById("pass").value

//     console.log(name, email, pass);

// })


// const name = document.getElementById('name')
// name.onchange = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.value);
// }


function handleClick() {
    console.log("Button Clicked");
    form.style.backgroundColor = "green"
}

const button = document.getElementById('btn')
button.addEventListener('click', handleClick)

setTimeout(() => {
    button.removeEventListener('click', handleClick)
}, 2000)