//! Async & Await

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(res);

    const data = await res.json()
    console.log(data);

}

getData()