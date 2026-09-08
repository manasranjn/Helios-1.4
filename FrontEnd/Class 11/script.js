//! Text Manipulation
const heading = document.querySelector('h1')
// console.log(heading);
// heading.textContent = "This is updated heading"
// heading.innerText = "Updated heading"
// heading.innerHTML = "Updated text"

// const box = document.getElementById('box')
// box.innerHTML = "<h1> This is another heading </h1>"

//! Attribute Manipulation
const image = document.getElementById('img')
const attr = image.getAttribute('alt')
// console.log(attr);

image.setAttribute('src', 'https://cdn.pixabay.com/photo/2026/08/24/21/24/21-24-56-735_1280.jpg')
// image.setAttribute('height', '600')
// image.setAttribute('class', 'img fish')
// console.log(image);
// image.width = "200"
// image.className = 'img'

//! Create and Insert New Element
const newEl = document.createElement('p')
newEl.textContent = "This is a new Paragraph"
// console.log(newEl);
newEl.style.fontSize = '20px'
newEl.style.color = 'blue'

const box = document.getElementById('box')
// box.append(newEl)
// box.prepend(newEl)
// box.after(newEl)
// box.before(newEl)

//! Delete / remove()
// box.remove()


//! Event
const button = document.querySelector('button')
button.onclick = () => {
    // console.log("Button Clicked");
    image.width = '400'
    image.height = '700'
    // box.innerHTML = '<p> This is new Paragraph</p>'

    const img = document.createElement('img')
    img.src = 'https://cdn.pixabay.com/photo/2020/02/20/08/24/bird-4864225_1280.jpg'
    img.height = '500'

    box.after(img)
}

function handleClick() {
    const img = document.createElement('img')
    img.src = 'https://cdn.pixabay.com/photo/2020/02/20/08/24/bird-4864225_1280.jpg'
    img.height = '500'

    box.after(img)
}