const menuButton = document.querySelector('.menu-nav')
const headerNav = document.querySelector('.header-main nav')
menuButton.addEventListener('click', e => {
	headerNav.classList.toggle('active')
	e.target.classList.toggle('active')
})

const clickIcon = document.querySelector('.product .save-product .icons button')
const productDiv = document.querySelector('.product .save-product')
clickIcon.addEventListener('click', () => {
	productDiv.classList.toggle('active')
})