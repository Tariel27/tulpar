// Тут можно менять процентную ставку
const withDrawal = 6.0; // с изъятием
const withoutDrawal = 12.5; // без изъятием
// ==================================
let range = document.getElementById("customRange");
let loanAmount = document.getElementById("loanAmount");
let generalAmount = document.getElementById("generalAmount");
let bid = document.getElementById("bid");

const currencyFormat = new Intl.NumberFormat("kg-KG");

range.addEventListener("input", (event) => {
  event.preventDefault();
  setLoanAmount();
  setGeneralAmount();
});

function setLoanAmount() {
  loanAmount.value = range.value;
  loanAmount.innerHTML = currencyFormat.format(range.value) + "c";
}

function setGeneralAmount() {
  generalAmount.innerHTML =
    currencyFormat.format(Math.floor(subtract(range.value))) + "c";
}

function subtract(value) {
  let a = parseInt((value / 100) * bid.value);
  return a;
}

function changeBid(newBid) {
  bid.value = newBid;
  bid.innerHTML = newBid + "%";
  setGeneralAmount();
}

function setWithDrawal() {
  changeBid(withDrawal);
}
function setWithoutDrawal() {
  changeBid(withoutDrawal);
}

setWithoutDrawal();
setLoanAmount();

//=====
const phoneInput1 = document.getElementById("phone1");
const nameInput1 = document.getElementById("name1");
const checkBox1 = document.getElementById("checkData1");
const submitButton = document.getElementById("submit-button");

checkBox1.addEventListener("click", function (event) {
  if (checkBox1.checked) {
    submitButton.classList.remove("btn-secondary");
    submitButton.classList.add("btn-primary");
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.classList.remove("btn-primary");
    submitButton.classList.add("btn-secondary");
    submitButton.setAttribute("disabled", null);
  }
});

phoneInput1.addEventListener("input", function (event) {
  event.preventDefault();
  let value = phoneInput1.value;
  let sizes = [3, 6, 9];
  for (let i = 0; i <= 9; i++) {
    if (value.length == sizes[i]) {
      value = value + "-";
    }
  }
  if (value.length > 12) {
    phoneInput1.value = value.substring(0, 12);
  } else {
    phoneInput1.value = value;
  }
});

const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("name");

phoneInput.addEventListener("input", function (event) {
  event.preventDefault();
  let value = phoneInput.value;
  let sizes = [3, 6, 9];
  for (let i = 0; i <= 9; i++) {
    if (value.length == sizes[i]) {
      value = value + "-";
    }
  }
  if (value.length > 12) {
    phoneInput.value = value.substring(0, 12);
  } else {
    phoneInput.value = value;
  }
});

//=====
const form1 = document.getElementById("notification-form");
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  if (isEmpty(nameInput.value) || isEmpty(phoneInput.value)) {
    document.getElementById("notification-block").scrollIntoView();
  } else {
    sendMail(nameInput.value, phoneInput.value);
  }
});

const form2 = document.getElementById("notification-form2");
form2.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!isEmpty(nameInput1.value) && !isEmpty(phoneInput1.value)) {
    sendMail(nameInput1.value, phoneInput1.value);
  }
});

function isEmpty(str) {
  return !str || str.length === 0;
}

function sendMail(name, phone) {
  let body = `
    <div>
      <div>ФИО: ${name}</div>
      <div>Номер: ${phone}</div>
    </div>
  `;

  Email.send({
    SecureToken: "3200ec58-ed40-4e87-ab21-e3f9c86b8abb",
    To: "tulpar-car@mail.ru",
    From: "tulpar.car1516@gmail.com",
    Subject: "Заявка на перезвон",
    Body: body,
  }).then(() => window.location.reload());
}

let ruButton = document.getElementById("ruButton");
let kgButton = document.getElementById("kgButton");

ruButton.addEventListener("click", () => actived(ruButton, kgButton));
kgButton.addEventListener("click", () => actived(kgButton, ruButton));

function actived(button1, button2) {
  if (!button1.classList.contains("btn-info")) {
    button1.classList.add("btn-info");
    button2.classList.remove("btn-info");
  }
  setWithDrawalElement()
}

setTimeout(() => {
  setWithDrawalElement();
}, 100);

function setWithDrawalElement() {
  let withoutDrawalElement = document.getElementById("withoutDrawal");
  withoutDrawalElement.innerHTML = withoutDrawal + "%";
}