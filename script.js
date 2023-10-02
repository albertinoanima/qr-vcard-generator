const formInline = $('.form-inline');
formInline.on('input', () => {
  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const fnVal = 'FN%3A' + firstName + '+' + lastName + '%0A';
  const nVal = 'N%3A' + lastName + '%3B' + firstName + '%0A';

  const posTitle = $('#posTitle').val();
  const posTitleVal = 'TITLE%3A' + posTitle + '%0A';

  const coName = $('#coName').val();
  const coNameVal = 'ORG%3A' + coName + '%0A';

  const phonePersonal = $('#phonePersonal').val();
  const phonePersonalVal = 'TEL%3BHOME%3BVOICE%3A' + phonePersonal + '%0A';

  const phoneBusiness = $('#phoneBusiness').val();
  const phoneBusinessVal = 'TEL%3BWORK%3BVOICE%3A' + phoneBusiness + '%0A';

  const emailBusiness = $('#emailBusiness').val();
  const emailBusinessVal = 'EMAIL%3BWORK%3BINTERNET%3A' + emailBusiness + '%0A';

  const website = $('#website').val();
  const websiteVal = 'URL%3A' + website + '%0A';

  const addyStreet = $('#addyStreet').val();
  const addyStreetVal = addyStreet + '%3B';


  const addyCity = $('#addyCity').val();
  const addyCityVal = addyCity + '%3B';
  const addyState = $('#addyState').val();
  const addyStateVal = addyState + '%3B';
  const addyZip = $('#addyZip').val();
  const addyZipVal = addyZip + '%3B';
  const addyCountry = $('#addyCountry').val();
  const adrVal = 'ADR%3A%3B%3B' + addyStreetVal + addyCityVal + addyStateVal + addyZipVal + addyCountry + '%0A';

  
  const qrUrlStart = 'https://api.qrserver.com/v1/create-qr-code/?data=BEGIN%3AVCARD%0AVERSION%3A2.1%0A';
  const qrUrlEnd = 'END%3AVCARD%0A';
  const qrURL = qrUrlStart + fnVal + nVal + posTitleVal + phoneBusinessVal + phonePersonalVal + emailBusinessVal + websiteVal + adrVal + coNameVal + qrUrlEnd;
  $('.qr-img').attr('src', qrURL);
  $('.biscard-out').html('<div class="biscard-img"><h3>' + firstName + ' ' + lastName + '</h3><div>' + posTitle + ' | ' + coName + '</div><div class="phone">w: <a href="tel:+1-' + phoneBusiness + '">' + phoneBusiness + '</a> | c: <a href="tel:+1-' + phoneMobile + '">' + phoneMobile + '</a></div><div class="email"><a href="mailto:' + emailBusiness + '">' + emailBusiness + '</a></div></div>');
})