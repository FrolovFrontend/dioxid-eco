// получаем прикрепленный файл и выводим на страницу
const uploadInput = document.getElementById("upload-file-request");
const formFile = document.getElementById("attach-file-request");

function handleFiles() {
  const fileList = this.files;
  const file = fileList[0];

  formFile.innerHTML = file.name;
}

uploadInput.addEventListener("change", handleFiles);
