(() => {
	const openMenu = document.querySelector('.header__open-burger');
	const menuBurg = document.querySelector('.mob-menu');
	const backdropMenu = document.querySelector('.backdrop-header')
	if (openMenu) {
		openMenu.addEventListener("click", function() {
			document.body.classList.toggle('lock');
			backdropMenu.classList.toggle('open');
			menuBurg.classList.toggle('active');
			openMenu.classList.toggle('hidde');
		})
	}
	const closeMenu = document.querySelector('.header__close-burger');
	if (closeMenu) {
		closeMenu.addEventListener("click", function() {
			document.body.classList.remove('lock');
			backdropMenu.classList.remove('open');
			menuBurg.classList.remove('active');
			openMenu.classList.remove('hidde');
		})
	}
	const closeProd = document.querySelector('.mob-menu__products');
	if (closeProd) {
		closeProd.addEventListener("click", function () {
				document.body.classList.remove('lock');
				menuBurg.classList.remove('active');
				backdropMenu.classList.remove('open');
				openMenu.classList.remove('hidde');
			})
	}
	const closeAb = document.querySelector('.mob-menu__about');
	if (closeAb) {
		closeAb.addEventListener("click", function () {
				document.body.classList.remove('lock');
				menuBurg.classList.remove('active');
				backdropMenu.classList.remove('open');
				openMenu.classList.remove('hidde');
			})
	}
	const closeGal = document.querySelector('.mob-menu__galllery');
	if (closeGal) {
		closeGal.addEventListener("click", function () {
				document.body.classList.remove('lock');
				menuBurg.classList.remove('active');
				backdropMenu.classList.remove('open');
				openMenu.classList.remove('hidde');
			})
	}
	const closeCon = document.querySelector('.mob-menu__contacts');
	if (closeCon) {
		closeCon.addEventListener("click", function () {
				document.body.classList.remove('lock');
				menuBurg.classList.remove('active');
				backdropMenu.classList.remove('open');
				openMenu.classList.remove('hidde');
			})
	}
})();