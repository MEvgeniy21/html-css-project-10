(() => {
	const openModal = document.querySelector('.buy-now-button');
	const backdropHeader = document.querySelector('.backdrop-header');
	const headerModal = document.querySelector('.header-modal')
	if (openModal) {
		openModal.addEventListener("click", function() {
			document.body.classList.toggle('lock_modal');
			backdropHeader.classList.toggle('open');
			headerModal.classList.toggle('_open');
		})
	}
	const closeModal = document.querySelector('.header-modal__button');
	if (closeModal) {
		closeModal.addEventListener("click", function() {
			document.body.classList.remove('lock_modal');
			backdropHeader.classList.remove('open');
			headerModal.classList.remove('_open');
		})
	}

	const mobMenuButton = document.querySelector('.mob-menu__button');
	const backdropHeaderMenu = document.querySelector('.backdrop-header');
	const modalMobMenu = document.querySelector('.mob-menu');
	const headerMenuModal = document.querySelector('.header-modal')
	if (mobMenuButton) {
		mobMenuButton.addEventListener("click", function() {
			document.body.classList.toggle('lock_modal');
			headerMenuModal.classList.toggle('_open');
			modalMobMenu.classList.toggle('active');

		})
	}
	const closeMenuModal = document.querySelector('.header-modal__button');
	const headerOpenBurger = document.querySelector('.header__open-burger');
	if (closeMenuModal) {
		closeMenuModal.addEventListener("click", function() {
			document.body.classList.remove('lock_modal');
			document.body.classList.remove('lock');
			backdropHeaderMenu.classList.remove('open');
			headerOpenBurger.classList.remove('hidde');
		})
	}
})();