//  Simply countdown
simplyCountdown('.simply-countdown', {
  year: 2024, // required
  month: 1, // required
  day: 1, // required
  hours: 9, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: 'Hari', plural: 'Hari' },
    hours: { singular: 'Jam', plural: 'Jam' },
    minutes: { singular: 'Menit', plural: 'Menit' },
    seconds: { singular: 'Detik', plural: 'Detik' },
  },
  refresh: 1000, //default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false, // enable count up if set to true})
});
//  End Simply countdown

// change button & auto scroll
function changeButton() {
  var btn = document.getElementById('btn-cover');
  btn.innerHTML = "Scroll ke bawah! <br> <i class='bi bi-mouse fs-1'></i>";
  btn.style.backgroundColor = 'transparent';
  btn.style.color = 'var(--grey-100)';
  btn.style.boxShadow = 'none';
  btn.style.position = 'absolute';
  btn.style.bottom = '12px';
  btn.style.left = '50%';
  btn.style.transform = 'translateX(-50%)';
  btn.className = 'btn btn-lg btn-primary';

  // Animasi scroll
  setTimeout(function () {
    var heroSection = document.getElementById('hero');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  }, 1500);
}

// fix bug offcanvas
const stickyTop = document.querySelector('.sticky-top');
const offcanvas = document.querySelector('.offcanvas');

offcanvas.addEventListener('show.bs.offcanvas', function () {
  stickyTop.style.overflow = 'visible';
});

offcanvas.addEventListener('hidden.bs.offcanvas', function () {
  stickyTop.style.overflow = 'hidden';
});
//end fix bug offcanvas

//  Disable scroll cover
const rootElement = document.querySelector(':root');
// audio
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
let isPlaying = false;
// end audio

// disable scroll
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  rootElement.style.scrollBehavior = 'auto';
}

// enable scroll
function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = 'smooth';

  // run fullscreen mode
  openFullscreen();

  // play audio
  playAudio();
}

// audio
function playAudio() {
  song.volume = 0.5;
  audioIconWrapper.style.display = 'flex';
  song.play();
  isPlaying = true;
}

// icon audio
audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    // change icon pause
    audioIcon.classList.remove('bi-disc');
    audioIcon.classList.add('bi-pause-circle');
  } else {
    song.play();
    // change icon playing
    audioIcon.classList.add('bi-disc');
    audioIcon.classList.remove('bi-pause-circle');
  }

  isPlaying = !isPlaying;
};
// end audio

// fullscreen mode
var elem = document.documentElement;
/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}
// end fullscreen mode

disableScroll();

//  End Disable scroll cover

//  custom guest name
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
const namaContainer = document.querySelector('.cover .text-guest h4');

if (nama && pronoun !== 'Bapak/Ibu/Saudara/i') {
  namaContainer.innerText = `${pronoun}, ${nama}`;
} else if (nama) {
  namaContainer.innerText = `${nama}`;
} else {
  namaContainer.innerText = `Bapak/Ibu/Saudara/i`;
}

//  end custom guest name

// copy to clipboard
function copyToClipboard(elementId, successMessage) {
  // copy text
  var textToCopy = document.getElementById(elementId).innerText;

  // creat temp
  var tempTextArea = document.createElement('textarea');
  tempTextArea.value = textToCopy;

  // hide element
  tempTextArea.style.position = 'absolute';
  tempTextArea.style.left = '-9999px';

  // add element
  document.body.appendChild(tempTextArea);

  // select text on element
  tempTextArea.select();

  // copy to clipboard
  document.execCommand('copy');

  // remove temp
  document.body.removeChild(tempTextArea);

  // show alert
  swal({
    title: 'Copied!',
    text: successMessage,
    icon: 'success',
    button: false,
    timer: 2000,
  });
}

// copy nomor rekening
function copyRekening() {
  copyToClipboard('nomorRekening', 'Nomor rekening berhasil dicopy!');
}

// copy address
function copyAddress() {
  copyToClipboard('address', 'Alamat berhasil dicopy!');
}

// form
const scriptURL =
  'https://script.google.com/macros/s/AKfycbxWD3oOpbeQKe328sQEY2Vm63pkzJ9YE_Seh8WfYSY8RZ4EVMJSMXP5mdI8X7iB7h3IsA/exec';
const form = document.forms['submit-rsvp'];
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
        text: 'Pesan Anda berhasil terkirim',
        icon: 'success',
        button: false,
        timer: 2000,
      });

      alert.classList.toggle('d-none');
      // console.log('Success!', response);
    }
  );
  // .catch((error) => console.error('Error!', error.message));
});
// form end
