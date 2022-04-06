(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-contacts-open]"),
        closeModalBtn: document.querySelector("[data-modal-contacts-close]"),
        modal: document.querySelector("[data-modal-contacts]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open")
        refs.modal.classList.toggle("is-hidden");
    }
})();