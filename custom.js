window.onload = () => {
  // Get the query string part of the current URL
  const queryString = window.location.search;

  // Parse the query string into an object
  const urlParams = new URLSearchParams(queryString);

  // Access parameters by name
  const keyData = urlParams.get("key");
  if (keyData === "data") {
    const theData = localStorage.getItem(keyData);
    if (theData !== null) {
      const encodedData = encodeURIComponent(theData);
      const dataURL = `data:text/vcard;charset=utf-8,${encodedData}`;

      const a = document.createElement('a');
      a.href = dataURL;
      a.innerText = 'Import Contact'; // You can customize the link text

      // Simulate a click event to open the contacts app automatically
      a.click();
    }
  }
}

const formInline = $('.form-inline');
formInline.on('input', () => {
  const name = $('#firstName').val();
  const surname = $('#lastName').val();
  const jobTitle = $('#posTitle').val();
  const company = $('#coName').val();
  const personalPhone = $('#phonePersonal').val();
  const businessPhone = $('#phoneBusiness').val();
  const personalEmail = $('#emailPersonal').val();
  const professionalEmail = $('#emailBusiness').val();

  const biscardOut = document.getElementById("biscard-out");
  biscardOut.innerHTML = `
    <div class="biscard-img">
      <h3>${name + ' ' + surname}</h3>
      <div>${jobTitle + ' | ' + company}</div>
      <div class="phone">
        w: <a href="tel:+1-${businessPhone}">${businessPhone}</a> | 
        c: <a href="tel:+1-${personalPhone}">${personalPhone}</a>
      </div>
      <div class="email">
        <a href="mailto:${personalEmail}">
          ${personalEmail}
        </a> | 
        <a href="mailto:${professionalEmail}">
          ${professionalEmail}
        </a> 
      </div>
    </div>`;
});

function excuteInstruction() {
  const name = String($('#firstName').val());
  const surname = String($('#lastName').val());
  const jobTitle = String($('#posTitle').val());
  const company = String($('#coName').val());
  const personalPhone = String($('#phonePersonal').val());
  const businessPhone = String($('#phoneBusiness').val());
  const personalEmail = String($('#emailPersonal').val());
  const professionalEmail = String($('#emailBusiness').val());
  const website = String($('#website').val());

  const street = String($('#addyStreet').val());
  const city = String($('#addyCity').val());
  const country = String($('#addyCountry').val());

  const encondedStringData = generateVCardString(
    name,
    surname,
    jobTitle,
    company,
    personalPhone,
    businessPhone,
    personalEmail,
    professionalEmail,
    website,
    city,
    country,
    street
  );

  localStorage.setItem("data", encondedStringData);
  const qrImg = document.getElementById("qr-img");
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${window.location.href}?key=data`;
};


// Create a function that generates a VCard string.
function generateVCardString(name, surname, jobTitle, company, personalPhone, businessPhone, personalEmail, professionalEmail, website, city, country, street) {
  const vcardString = `BEGIN:VCARD
VERSION:3.0
N:${surname};${name}
FN:${surname} ${name}
TITLE:${jobTitle}
ORG:${company}
TEL;TYPE=VOICE;HOME:${personalPhone}
TEL;TYPE=VOICE;WORK:${businessPhone}
EMAIL;TYPE=HOME:${personalEmail}
EMAIL;TYPE=WORK:${professionalEmail}
URL:${website}
ADR;TYPE=WORK:;;${street};${city};${country}
END:VCARD`;
  return vcardString;
}