// confirm clear form
function confirmClear() {
  swal({
    title: 'Konfirmasi',
    text: 'Apakah Anda yakin ingin menghapus semua data yang sudah Anda isi pada form?',
    icon: 'warning',
    buttons: {
      cancel: 'Batal',
      confirm: {
        text: 'Ya, Hapus',
      },
    },
  }).then((willClear) => {
    if (willClear) {
      swal({
        title: 'Form Removed!',
        text: 'Semua data telah dihapus.',
        icon: 'success',
        button: false,
        timer: 2000,
      });
      document.getElementById('form').reset();
    } else {
      swal({
        title: 'Form Save',
        text: 'Semua data tidak jadi dihapus.',
        icon: 'info',
        button: false,
        timer: 1500,
      });
    }
  });
}
// confirm clear form end

// form
const forms = document.getElementById('form');
// disable form love story
const formStory = document.getElementById('formStory');
const checkboxStory = document.getElementById('optionalCheckStory');
const headingStory = document.querySelectorAll('#headingStory');
const labelStory = document.querySelectorAll('#labelStory');
const inputStory = document.querySelectorAll('#inputTextStory');
const textAreaStory = document.querySelectorAll('#textAreaStory');

// checkbox without love story
checkboxStory.addEventListener('change', () => {
  if (checkboxStory.checked) {
    // hide forms story
    formStory.className = 'd-none';

    headingStory.forEach((heading) => {
      heading.className = 'text-secondary mb-4';
    });

    labelStory.forEach((label) => {
      label.className = 'text-secondary mb-2';
    });

    inputStory.forEach((input) => {
      input.disabled = true;
      input.value = '';
      input.style.cursor = 'not-allowed';
    });

    textAreaStory.forEach((textarea) => {
      textarea.disabled = true;
      textarea.value = '';
      textarea.style.cursor = 'not-allowed';
    });
    // alert(
    swal({
      title: 'Tanpa Love Story',
      text: 'Anda memilih tanpa love story',
      icon: 'success',
      button: false,
      timer: 2000,
    });
  } else {
    // show forms story
    formStory.className = 'form-wrapper';

    headingStory.forEach((heading) => {
      heading.className = 'mb-4';
    });

    labelStory.forEach((label) => {
      label.className = 'mb-2';
    });

    inputStory.forEach((input) => {
      input.disabled = false;
      input.value = '';
      input.style.cursor = '';
    });

    textAreaStory.forEach((textarea) => {
      textarea.disabled = false;
      textarea.value = '';
      textarea.style.cursor = '';
    });
  }
});
// disable form love story end

// disable form wedding gift
const formGift = document.getElementById('formGift');
const checkboxGift = document.getElementById('optionalCheckGift');
const headingGift = document.querySelectorAll('#headingGift');
const labelGift = document.querySelectorAll('#labelGift');
const inputGift = document.querySelectorAll('#inputTextGift');
const textAreaGift = document.querySelectorAll('#textAreaGift');

// checkbox without wedding gift
checkboxGift.addEventListener('change', () => {
  if (checkboxGift.checked) {
    // hide forms gift
    formGift.className = 'd-none';

    headingGift.forEach((heading) => {
      heading.className = 'text-secondary mb-4';
    });

    labelGift.forEach((label) => {
      label.className = 'text-secondary mb-2';
    });

    inputGift.forEach((input) => {
      input.disabled = true;
      input.value = '';
      input.style.cursor = 'not-allowed';
    });

    textAreaGift.forEach((textarea) => {
      textarea.disabled = true;
      textarea.value = '';
      textarea.style.cursor = 'not-allowed';
    });
    // alert
    swal({
      title: 'Tanpa Wedding Gift',
      text: 'Anda memilih tanpa wedding gift',
      icon: 'success',
      button: false,
      timer: 2000,
    });
  } else {
    // show forms gift
    formGift.className = 'row d-flex flex-column flex-sm-row gap-lg-4 mt-4';

    headingGift.forEach((heading) => {
      heading.className = 'mb-4';
    });

    labelGift.forEach((label) => {
      label.className = 'mb-2';
    });

    inputGift.forEach((input) => {
      input.disabled = false;
      input.value = '';
      input.style.cursor = '';
    });

    textAreaGift.forEach((textarea) => {
      textarea.disabled = false;
      textarea.value = '';
      textarea.style.cursor = '';
    });
  }
});
// disable form wedding gift end

// disable form video
const formVideo = document.getElementById('formVideo');
const checkboxVideo = document.getElementById('optionalCheckVideo');
const labelVideo = document.querySelectorAll('#labelVideo');
const inputVideo = document.querySelectorAll('#inputTextVideo');

// checkbox without preview video
checkboxVideo.addEventListener('change', () => {
  if (checkboxVideo.checked) {
    // hide forms video
    formVideo.className = 'd-none';

    labelVideo.forEach((label) => {
      label.className = 'text-secondary mb-2';
    });

    inputVideo.forEach((input) => {
      input.disabled = true;
      input.value = '';
      input.style.cursor = 'not-allowed';
    });
    // alert
    swal({
      title: 'Tanpa Preview Video',
      text: 'Anda memilih tanpa preview video',
      icon: 'success',
      button: false,
      timer: 2000,
    });
  } else {
    // show forms video
    formVideo.className = 'mb-3';

    labelVideo.forEach((label) => {
      label.className = 'mb-2';
    });

    inputVideo.forEach((input) => {
      input.disabled = false;
      input.value = '';
      input.style.cursor = '';
    });
  }
});
// disable form video end

// disable form live steraming
const formLive = document.getElementById('formLive');
const checkboxLive = document.getElementById('optionalCheckLive');
const labelLive = document.querySelectorAll('#labelLive');
const inputLive = document.querySelectorAll('#inputTextLive');

// checkbox without live streaming
checkboxLive.addEventListener('change', () => {
  if (checkboxLive.checked) {
    // hide forms Live
    formLive.className = 'd-none';

    labelLive.forEach((label) => {
      label.className = 'text-secondary mb-2';
    });

    inputLive.forEach((input) => {
      input.disabled = true;
      input.value = '';
      input.style.cursor = 'not-allowed';
    });

    // alert
    swal({
      title: 'Tanpa Live Streaming',
      text: 'Anda memilih tanpa live streaming',
      icon: 'success',
      button: false,
      timer: 2000,
    });
  } else {
    // show forms Live
    formLive.className = 'mb-3';

    labelLive.forEach((label) => {
      label.className = 'mb-2';
    });

    inputLive.forEach((input) => {
      input.disabled = false;
      input.value = '';
      input.style.cursor = '';
    });
  }
});
// disable form live steraming end

// reset form disabled
forms.addEventListener('reset', () => {
  // love story
  // show form story
  formStory.className = 'form-wrapper';

  labelStory.forEach((label) => {
    label.className = 'mb-2';
  });

  inputStory.forEach((input) => {
    input.disabled = false;
    input.value = '';
  });

  textAreaStory.forEach((textarea) => {
    textarea.disabled = false;
    textarea.value = '';
  });

  checkboxStory.checked = false;
  // love story end

  // wedding gift
  // show form gift
  formGift.className = 'row d-flex flex-column flex-sm-row gap-lg-4 mt-4';

  labelGift.forEach((label) => {
    label.className = 'mb-2';
  });

  inputGift.forEach((input) => {
    input.disabled = false;
    input.value = '';
  });

  textAreaGift.forEach((textarea) => {
    textarea.disabled = false;
    textarea.value = '';
  });

  checkboxGift.checked = false;
  // wedding gift end

  // preview video
  // show forms video
  formVideo.className = 'mb-3';

  labelVideo.forEach((label) => {
    label.className = 'mb-2';
  });

  inputVideo.forEach((input) => {
    input.disabled = false;
    input.value = '';
    input.style.cursor = '';
  });

  checkboxVideo.checked = false;
  // preview video

  // live streaming
  // show forms live streaming
  formLive.className = 'mb-3';

  labelLive.forEach((label) => {
    label.className = 'mb-2';
  });

  inputLive.forEach((input) => {
    input.disabled = false;
    input.value = '';
    input.style.cursor = '';
  });

  checkboxLive.checked = false;
  // live streaming end
});
// reset form disabled end

// form submit
const scriptURL =
  'https://script.google.com/macros/s/AKfycbznvhxo7siblsumCJZVFBhCcmvr_SMBJgJtxD1CzTygrLedKJfnZSRn9CMrqUVKJfL_Ug/exec';
const form = document.forms['submit-form-wadda'];
// const alert = document.getElementById('alert-done');
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

      // show alert
      // alert.classList.toggle('d-none');
      swal({
        title: 'Submitted!',
        text: 'Data berhasil terkirim',
        icon: 'success',
        button: false,
        timer: 2000,
      });
      // reset forms
      form.reset();

      console.log('Success!', response);

      // Redirect
      setTimeout(function () {
        window.location.href = '/order/submit-success.html';
      }, 2000);
    }
  );
  // .catch((error) => console.error('Error!', error.message));
});
// form submit end
