// forms
var submitted = false;
var actionUrl =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfNC72u3BgcL2O0I_taQttsqmDOBctjSsjHPMYl6gzmK7m3pA/formResponse';

// Buat elemen iframe dan tambahkan ke dalam DOM
var iframeWrapper = document.getElementById('iframe-wrapper');
var iframe = document.createElement('iframe');

iframe.setAttribute('name', 'hiddenConfirm');
iframe.setAttribute('id', 'hiddenConfirm');
iframe.style.display = 'none';
iframe.onload = onLoad; // Set fungsi onLoad sebagai callback onload
iframeWrapper.appendChild(iframe);

function onSubmit() {
  // change button
  var submitButton = document.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.innerHTML = 'Mengirim...';

  submitted = true;

  // add delay
  setTimeout(function () {
    // change button to default
    submitButton.disabled = false;
    submitButton.innerHTML = 'Submit form';
  }, 2000);
}

function onLoad() {
  if (submitted) {
    // Show alert
    swal({
      title: 'Submitted!',
      text: 'Data berhasil terkirim',
      icon: 'success',
      button: false,
      timer: 2000,
    });

    // Redirect
    setTimeout(function () {
      window.location.href = 'kontak.html';
    }, 2000);
  }
}

// Set the action URL for the form
document.querySelector('form').action = actionUrl;
// forms end
