const openModalButtons = document.querySelectorAll('.openModal');
const closeModalButtons = document.querySelectorAll('.closeModal');
const modals = document.querySelectorAll('.myModal');

openModalButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const modalId = this.getAttribute('data-modal');
    const modal = document.querySelector(`#${modalId}`);
    modal.showModal();

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.close();
      }
    });
  });
});

closeModalButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    this.parentNode.close();
  });
});
