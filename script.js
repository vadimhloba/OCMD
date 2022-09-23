const menuButton = document.querySelector('.menu-nav')
const headerNav = document.querySelector('.header-main nav')
const buttonActive = document.querySelector('.header-main .button-active')
const imgAnim = document.querySelector('.header-main nav.active img')
menuButton.addEventListener('click', () => {
	headerNav.classList.toggle('active')
	buttonActive.classList.toggle('active')
	imgAnim.classList.toggle('active')
})