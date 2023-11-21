// forms
var submitted = false;
var actionUrl =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfNC72u3BgcL2O0I_taQttsqmDOBctjSsjHPMYl6gzmK7m3pA/formResponse';

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
      window.location = 'kontak.html';
    }, 2000);
  }
}

// Set the action URL for the form
document.querySelector('form').action = actionUrl;
// forms end
