export const closeModal = () => {
  clearFields();
  const modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
  modal.hide();
  removeModalBackdrop();
};

export const closeModal2 = () => {
  const modal = bootstrap.Modal.getInstance(document.getElementById('modal2'));
  modal.hide();
  removeModalBackdrop();
};

const removeModalBackdrop = () => {
  const modalBackdrop = document.querySelector('.modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.remove();
  }
  document.body.classList.remove('modal-open');
  document.body.style = '';
};

const clearFields = () => {
  const fields = document.querySelectorAll('.form-control');
  fields.forEach(field => field.value = '');
  document.getElementById('name').dataset.index = 'new';
};
