const menuButton = document.querySelector('.menu-nav')
const headerNav = document.querySelector('.header-main nav')
const buttonActive = document.querySelector('.header-main .button-active')
menuButton.addEventListener('click', () => {
	headerNav.classList.toggle('active')
	buttonActive.classList.toggle('active')
})