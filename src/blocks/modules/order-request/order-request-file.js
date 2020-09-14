const uploadInput = document.getElementById("upload-file-request");
const formFile = document.getElementById("attach-file-request");

function handleFiles() {
  const fileList = this.files;
  const file = fileList[0];

  if (file) {
    formFile.innerHTML = file.name;
  } else {
    formFile.innerHTML = "Выберите файл";
  }
}

uploadInput.addEventListener("change", handleFiles);
