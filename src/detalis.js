(() => {
	const refs = {
	  openDetalBtn: document.querySelector("[data-detalis-open]"),
		detalis: document.querySelector("[data-detalis]"),
		text: document.querySelector("[text]"),
	};

	refs.openDetalBtn.addEventListener("click", toggleDetalis);
	refs.detalis.addEventListener("click", toggleDetalis);

	function toggleDetalis() {
		refs.detalis.classList.toggle("is-open");
		refs.text.classList.toggle("margin");
		refs.openDetalBtn.classList.toggle("is-open");
	}

	const refs2 = {
	  openDetalBtn2: document.querySelector("[data-detalis-open2]"),
		detalis2: document.querySelector("[data-detalis2]"),
		text2: document.querySelector("[text2]"),
	};

	refs2.openDetalBtn2.addEventListener("click", toggleDetalis2);
	refs2.detalis2.addEventListener("click", toggleDetalis2);

	function toggleDetalis2() {
		refs2.detalis2.classList.toggle("is-open");
		refs2.text2.classList.toggle("margin");
		refs2.openDetalBtn2.classList.toggle("is-open");
	}

		const refs3 = {
	  openDetalBtn3: document.querySelector("[data-detalis-open3]"),
		detalis3: document.querySelector("[data-detalis3]"),
		text3: document.querySelector("[text3]"),
	};

	refs3.openDetalBtn3.addEventListener("click", toggleDetalis3);
	refs3.detalis3.addEventListener("click", toggleDetalis3);

	function toggleDetalis3() {
		refs3.detalis3.classList.toggle("is-open");
		refs3.text3.classList.toggle("margin");
		refs3.openDetalBtn3.classList.toggle("is-open");
	}

 })();