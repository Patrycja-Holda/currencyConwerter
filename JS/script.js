let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let buttonElement = document.querySelector(".js-button");
let resultElement = document.querySelector(".js-result");

buttonElement.addEventListener("click", () => {
  buttonElement.innerHTML = "OBLICZ PONOWNIE";
});

let rateEUR = 4.29;
let rateGBP = 5.02;
let rateUSD = 4.03;
let rateCHF = 4.41;
let rateTHB = 0.11;

formElement.addEventListener("submit", (event) =>
  {
    event.preventDefault();
  
  let amount = +amountElement.value;
  let currency = currencyElement.value;
  
  let result;
  
  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;
    case "USD":
      result = amount / rateUSD;
      break;
    case "GBP":
      result = amount / rateGBP;
      break;
    case "CHF":
      result = amount / rateCHF;
      break
    case "THB":
      result = amount / rateTHB;
      break;
  }
  
  resultElement.innerHTML = `<section class="section">Wynik: ${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}
  <div class="section__paragraphContainer">
  <p>KURSY WALUT NA DZIEŃ 12.04.24 r. </p>
  <p>EURO = 4.29</p>
  <p>DOLAR = 4.03</p>
  <p>FUNT BRYTYJSKI = 5.02</p>
  <p>FRANK SZWAJCARSKI = 4.41</p>
  <p>BAT TAJLANDZKI = 0.11</p></div></section>`;
});

formElement.addEventListener("reset", () => {
  resultElement.innerHTML = ""; 
});