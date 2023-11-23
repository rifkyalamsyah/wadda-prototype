// form submit
const scriptURL =
  'https://script.google.com/macros/s/AKfycbzHaQg7__CLu1tdAT_NWWzn-Ac2o7Dr-k3I2t5mePM-YtNfDhSylPyX4N0JIUStwG65/exec';
const form = document.forms['submit-form-contact'];
const alert = document.getElementById('alert-done');
const btnSubmit = document.getElementById('btn-submit');
const btnLoading = document.getElementById('btn-loading');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // change button
  btnLoading.classList.toggle('d-none');
  btnSubmit.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) }).then(
    (response) => {
      btnLoading.classList.toggle('d-none');
      btnSubmit.classList.toggle('d-none');

      // reset forms
      form.reset();

      // show alert
      swal({
        title: 'Submitted!',
        text: 'Pesan anda berhasil terkirim',
        icon: 'success',
        button: false,
        timer: 2000,
      });

      // console.log('Success!', response);

      alert.classList.toggle('d-none');
    }
  );
  // .catch((error) => console.error('Error!', error.message));
});
// form submit end
