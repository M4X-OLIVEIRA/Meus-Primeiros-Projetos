const inputSolution = document.querySelector(".solution");
const resultInput = document.querySelector(".result");
const numberButtons = document.querySelectorAll(".container-numbers button");
const from = document.getElementById("from");
const to = document.getElementById("to");

function convertCurrency(value, fromCurrency, toCurrency) {
  const rates = {
    real: { dolar: 0.19, euro: 0.18, yuan: 1.38, real: 1 },
    dolar: { real: 5.49, euro: 0.93, yuan: 7.23, dolar: 1 },
    euro: { real: 5.60, dolar: 1.07, yuan: 7.78, euro: 1 },
    yuan: { real: 0.72, dolar: 0.14, euro: 0.13, yuan: 1 },
  };

  return value * rates[fromCurrency][toCurrency];
}

let rawValue = "";

function updateResult(){
  const number = parseFloat(rawValue) / 100||0;
  const fromCurrency = from.value;
  const toCurrency = to.value;

  const converted = convertCurrency(number, fromCurrency, toCurrency);

  resultInput.value = converted.toLocaleString("pt-BR",{
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
const digit = button.textContent;

if (digit === "RESET") {
  rawValue = "";
  inputSolution.value = "";
  resultInput.value = "";
  return;
}

if (!/^\d$/.test(digit)) return;

rawValue += digit;

const number = parseFloat(rawValue) / 100;

inputSolution.value = number.toLocaleString("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

updateResult();
  });
});


from.addEventListener("change", updateResult);
to.addEventListener("change", updateResult);