// получаем прикрепленный файл и выводим на страницу
const uploadInput = document.getElementById("upload-file-request");
const formFile = document.getElementById("attach-file-request");
const deleteFileBtn = document.getElementById("delete-file-request");

function handleFiles() {
  const fileList = this.files;
  const file = fileList[0];

  if (fileList.length >= 0) {
    formFile.innerHTML = file.name;
    deleteFileBtn.style.display = "block";
  } else {
    formFile.innerHTML = "Выберите файл";
    deleteFileBtn.style.display = "none";
  }
}

uploadInput.addEventListener("change", handleFiles);
