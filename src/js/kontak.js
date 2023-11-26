const scriptURL =
  'https://script.google.com/macros/s/AKfycbzHaQg7__CLu1tdAT_NWWzn-Ac2o7Dr-k3I2t5mePM-YtNfDhSylPyX4N0JIUStwG65/exec';
// Mendapatkan referensi formulir, alert, dan tombol
const form = document.forms['submit-form-contact'];
const alert = document.getElementById('alert-done');
const btnSubmit = document.getElementById('btn-submit');
const btnLoading = document.getElementById('btn-loading');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (form.checkValidity()) {
    // change button
    btnLoading.classList.toggle('d-none');
    btnSubmit.classList.toggle('d-none');

    // send form
    fetch(scriptURL, { method: 'POST', body: new FormData(form) }).then(
      (response) => {
        // change button
        btnLoading.classList.toggle('d-none');
        btnSubmit.classList.toggle('d-none');

        // reset form
        form.reset();
        form.classList.remove('was-validated');

        // alert
        swal({
          title: 'Submitted!',
          text: 'Pesan anda berhasil terkirim',
          icon: 'success',
          button: false,
          timer: 3000,
        });

        // hide alert
        alert.classList.toggle('d-none');
      }
    );
  } else {
    // check validation
    form.classList.add('was-validated');
  }
});
