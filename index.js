console.log('bobbyhadz.com');

const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', event => {
  const files = event.target.files;
  console.log(files);

  if (files.length > 3) {
    alert('A maximum of 3 files are allowed');

    return;
  }

  // Your code for uploading the file to the remote server (e.g. AWS S3)
});
