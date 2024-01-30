function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Please select a file');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    const progressBar = document.getElementById('progressBar');
    const status = document.getElementById('status');
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/upload', true);

  
    xhr.upload.onprogress = function (e) {
      if (e.lengthComputable) {
        const percentComplete = (e.loaded / e.total) * 100;
        progressBar.value = percentComplete;
      }
    };
  
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            status.innerHTML = 'File uploaded successfully!';
          } else {
            status.innerHTML = `Error uploading file. Status: ${xhr.status}, Response: ${xhr.responseText}`;
          }
        }
      };
      
  
    xhr.send(formData);
  }
  