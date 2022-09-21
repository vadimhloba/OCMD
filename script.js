const menuButton = document.querySelector('.menu-nav')
const headerNav = document.querySelector('.header-main nav')
menuButton.addEventListener('click', () => {
	headerNav.classList.add('active')
})