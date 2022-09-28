/*----------START menu button----------*/
const menuButton = document.querySelector('.menu-nav')
const headerNav = document.querySelector('.header-main nav')
menuButton.addEventListener('click', e => {
	headerNav.classList.toggle('active')
	e.target.classList.toggle('active')
})
/*----------END menu button----------*/
/*----------START save-product----------*/
const clickIcon = document.querySelector('.product .save-product .icons button')
const productDiv = document.querySelector('.product .save-product')
clickIcon.addEventListener('click', () => {
	productDiv.classList.toggle('active')
})
/*----------END save-product----------*/
/*----------START slider----------*/
const sliderButton = document.querySelector('')
/*----------END slider----------*/