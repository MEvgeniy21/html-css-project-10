(() => {
	const openModal = document.querySelector('.buy-now-button');
	const menuModal = document.querySelector('.backdrop-header');
	if (openModal) {
		openModal.addEventListener("click", function() {
			document.body.classList.toggle('lock_modal');
			menuModal.classList.toggle('open');
		})
	}
	const closeModal = document.querySelector('.header-modal__button');
	if (closeModal) {
		closeModal.addEventListener("click", function() {
			document.body.classList.remove('lock_modal');
			menuModal.classList.remove('open');
		})
	}

	const openMenuModal = document.querySelector('.mob-menu__button');
	const menuOpModal = document.querySelector('.backdrop-header');
	const menuMobBurg = document.querySelector('.mob-menu');
	const openMobMenu = document.querySelector('.header__open-burger');
	if (openMenuModal) {
		openMenuModal.addEventListener("click", function() {
			document.body.classList.toggle('lock_modal');
			menuOpModal.classList.toggle('open');
		})
	}
	const closeMenuModal = document.querySelector('.header-modal__button');
	if (closeMenuModal) {
		closeMenuModal.addEventListener("click", function() {
			document.body.classList.remove('lock_modal');
			document.body.classList.remove('lock');
			menuOpModal.classList.remove('open');
			menuMobBurg.classList.remove('active');
			openMobMenu.classList.remove('hidde');
		})
	}
})();