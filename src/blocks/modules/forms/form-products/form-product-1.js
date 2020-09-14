// кастомное прикрепление файла
const uploadInput = document.getElementById("file-upload-product-1");
const formFiles = document.getElementById("file-attach-product-1");

function handleFiles() {
  const fileList = this.files;
  const file = fileList[0];

  if (file) {
    formFiles.innerHTML = file.name;
  } else {
    formFiles.innerHTML = "Выберите файл";
  }
}
uploadInput.addEventListener("change", handleFiles);
