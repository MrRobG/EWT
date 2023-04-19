document.getElementById('modalButton').addEventListener('click', openModal);

function openModal() {
  const myModal = new bootstrap.Modal('#exampleModal');
  myModal.show();
}
