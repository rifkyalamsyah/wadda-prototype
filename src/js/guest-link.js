// generate link
function generateLink() {
  let titleLink = document.querySelector("input[name='inputTitleLink']").value;
  let pronoun = document.querySelector("select[name='selectPronoun']").value;
  let guestName = document.querySelector("input[name='inputGuestName']").value;

  // encodeURLComponent
  let encodeGuestName = encodeURIComponent(guestName);
  // replace %20 with +
  encodeGuestName = encodeGuestName.replace(/%20/g, '+');

  // generate links
  let link;
  if (pronoun) {
    link = `https://wadda.me/${titleLink}?p=${pronoun}&n=${encodeGuestName}`;
  } else {
    link = `https://wadda.me/${titleLink}?n=${encodeGuestName}`;
  }

  // show card & text
  const cardLinks = document.getElementById('card-links');
  const textOutput = document.getElementById('textOutput');
  const btnDelete = document.getElementById('btn-reset');

  // result
  cardLinks.className = 'card-wrapper card rounded-4 p-3 p-sm-4 mt-3';
  // show link & button
  document.querySelector('#result').href = link;
  document.querySelector('#result').innerHTML = link;
  btnDelete.className = 'btn btn-outline-danger';
}

// run generate link
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  generateLink();
  // alert
  swal({
    title: 'yeay!',
    text: 'Link berhasil dibuat!',
    icon: 'success',
    buttons: false,
    timer: 2000,
  });
});

// copy link
function copyLink() {
  // Getting the link element
  let linkElement = document.getElementById('result');

  // Creating a temporary input element
  let tempInput = document.createElement('input');
  tempInput.value = linkElement.href;

  // Appending the input element to the body
  document.body.appendChild(tempInput);

  // Selecting the text in the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /* For mobile devices */

  // Copying the text to the clipboard
  document.execCommand('copy');

  // Removing the temporary input element
  document.body.removeChild(tempInput);

  // Show a success message or perform any other action as needed
  swal({
    title: 'Copied',
    text: 'Link berhasil disalin!',
    icon: 'success',
    buttons: false,
    timer: 2000,
  });
}

// share to whatsapp
function share() {
  // Getting user input
  let link = document.getElementById('result');
  let message = link.innerHTML;

  // Replace %20 with +
  message = message.replace(/%20/g, '+');
  // Replace &amp; with &
  message = message.replace(/&amp;/g, '&');

  // Opening URL
  window.open('whatsapp://send?text=' + encodeURIComponent(message), '_blank');
}

// reset form
document.querySelector('form').addEventListener('reset', function (e) {
  e.preventDefault();

  // Check if any form field has a value
  const titleLinkValue = document.querySelector(
    "input[name='inputTitleLink']"
  ).value;
  const pronounValue = document.querySelector(
    "select[name='selectPronoun']"
  ).value;
  const guestNameValue = document.querySelector(
    "input[name='inputGuestName']"
  ).value;

  // If all form fields are empty, do not proceed with reset
  if (!titleLinkValue && !pronounValue && !guestNameValue) {
    return;
  }

  // reset form
  resetForm();

  // alert
  swal({
    title: 'Deleted!',
    text: 'semua data berhasil dihapus',
    icon: 'success',
    buttons: false,
    timer: 2000,
    customClass: {
      modal: 'border-radius-100',
    },
  });
});
// clear forms
function resetForm() {
  // Clear the generated link
  document.querySelector('#result').href = '';
  document.querySelector('#result').innerHTML = '';
  const btnDelete = document.getElementById('btn-reset');

  // Hide the card & button
  const cardLinks = document.getElementById('card-links');
  cardLinks.classList.add('d-none');
  btnDelete.className = 'btn btn-outline-danger d-none';

  // Clear the form fields
  document.querySelector("input[name='inputTitleLink']").value = '';
  document.querySelector("select[name='selectPronoun']").value = '';
  document.querySelector("input[name='inputGuestName']").value = '';
}
