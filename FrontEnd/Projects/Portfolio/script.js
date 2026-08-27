const menu = document.querySelector('.menu')
const menubar = document.querySelector('.nav-links')
const close = document.getElementById('close')

menu.onclick = () => {
    menubar.style.transform = 'translateX(20%)'
}

close.onclick = () => {
    menubar.style.transform = 'translateX(-100%)'
}
