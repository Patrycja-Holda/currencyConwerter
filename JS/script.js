{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.29;
    const rateGBP = 5.02;
    const rateUSD = 4.03;
    const rateCHF = 4.41;
    const rateTHB = 0.11;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;
      case "USD":
        return amount / rateUSD;
      case "GBP":
        return amount / rateGBP;
      case "CHF":
        return amount / rateCHF;
      case "THB":
        return amount / rateTHB;
    }
  }

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `<section class="section">Wynik: ${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}
 <div class="section__paragraphContainer">
 <p>KURSY WALUT NA DZIEŃ 12.04.24 r. </p>
 <p>EURO = 4.29</p>
 <p>DOLAR = 4.03</p>
 <p>FUNT BRYTYJSKI = 5.02</p>
 <p>FRANK SZWAJCARSKI = 4.41</p>
 <p>BAT TAJLANDZKI = 0.11</p></div></section>`;

 const buttonElement = document.querySelector(".js-button");

  buttonElement.addEventListener("click", () => {
    buttonElement.innerHTML = "OBLICZ PONOWNIE";
  });

  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);

  }

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);

    formElement.addEventListener("reset", () => {
      resultElement.innerHTML = "";
    });

  }

  init();

}