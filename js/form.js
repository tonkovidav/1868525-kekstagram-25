const uploadFileStart = document.querySelector ('.img-upload__start');
const uploadFile = uploadFileStart.querySelector ('.img-upload__input');
uploadFileStart.addEventListener ('click', () => {
  uploadFile.classList.remove ('visually-hidden');
});
