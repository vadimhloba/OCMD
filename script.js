/* -----START menu action------ */
const menuButton = document.querySelector('.menu-nav'),
			headerNav = document.querySelector('.header-main nav')
menuButton.addEventListener('click', e => {
	headerNav.classList.toggle('active')
	e.target.classList.toggle('active')
})
/* -----END menu action------ */
/* ------START save product animation----- */
const saveProduct = document.querySelector('.product .save-product'),
			saveProductFun = e => {
				e.target.classList.toggle('active')
			}
saveProduct.addEventListener('click', e => saveProductFun(e))
saveProduct.addEventListener('mouseover', e => saveProductFun(e))
/* -----END save product animation----- */
/* ------START slider----- */
const sliderBtn = document.querySelectorAll('.slider-controls button'),
			sliderAction1 = document.querySelector('.tab-desk .slider-img')
			sliderAction2 = document.querySelector('.tab-appear .slider-img')
sliderBtn.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    sliderBtn.forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active')
		sliderAction1.setAttribute('src', e.target.dataset.src)
		sliderAction2.setAttribute('src', e.target.dataset.src)
  })
})
/* -----END slider------ */

/*
1 mouse click
2 take data-src from e.target
3 put data-src to the image
*/
