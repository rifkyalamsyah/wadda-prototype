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

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  rootElement.style.scrollBehavior = 'auto';
}

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

// form
window.addEventListener('load', function () {
  const form = document.getElementById('my-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, { method: 'POST', body: data }).then(() => {
      alert('Konfirmasi Kehadiran Berhasil Terkirim!');
    });
  });
});
// end form

//  custom guest name
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
const namaContainer = document.querySelector('.cover .text-guest h4');
namaContainer.innerText = `${pronoun}, ${nama}`;

document.querySelector('#nama').value = nama;
//  end custom guest name

// change button & scroll
function changeButton() {
  var btn = document.getElementById('btn-cover');
  btn.innerHTML = "Scroll ke bawah! <br> <i class='bi bi-mouse fs-1'></i>";
  btn.style.backgroundColor = 'transparent';
  btn.style.color = 'var(--grey-100)';
  btn.style.boxShadow = 'none';
  btn.style.position = 'absolute';
  btn.style.bottom = '50px';
  btn.style.left = '50%';
  btn.style.transform = 'translateX(-50%)';
  btn.className = 'btn btn-lg btn-primary';

  // Animasi scroll
  setTimeout(function () {
    var heroSection = document.getElementById('hero');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  }, 1500);
}
