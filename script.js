const menuButton = document.querySelector('.menu-nav')
const headerNav = document.querySelector('.header-main nav')
const menuClose = document.querySelector('.nav-active')
menuButton.addEventListener('click', () => {
	headerNav.classList.add('active')
	menuClose.classList.add('active')
})
menuClose.addEventListener('click', () => {
	headerNav.classList.add('inactive')
	menuClose.classList.add('inactive')
})