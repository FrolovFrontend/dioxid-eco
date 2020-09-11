// получаем прикрепленный файл и выводим на страницу
const uploadInput = document.getElementById("file-upload");
const formFile = document.getElementById("file-attach");
// const deleteFileBtn = document.getElementById("delete-file-consultation");

function handleFilesConsultation() {
  const fileList = this.files;
  const file = fileList[0];

  formFile.innerHTML = file.name;
}

uploadInput.addEventListener("change", handleFilesConsultation);
