const btn = document.querySelector('.nav__btn')
const menu = document.querySelector('.nav__menu')
const link = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')

const moveMenu = () => {
    menu.classList.toggle('menu-move')
}

const handleCurrentYear = () => {
    const year = new Date().getFullYear()
    footerYear.innerText = year
}

handleCurrentYear()
btn.addEventListener('click', moveMenu)
link.forEach(el => {
    el.addEventListener('click', moveMenu
    )
});
