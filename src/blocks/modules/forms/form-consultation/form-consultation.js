// кастомное прикрепление файла
const uploadInput = document.getElementById("file-upload");
const formFiles = document.getElementById("file-attach");

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
