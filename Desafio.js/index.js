const inputSolution = document.querySelector(".solution");
const numberButtons = document.querySelectorAll(".container-numbers button");

let rawValue = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const digit = button.textContent;

    if (!/^\d$/.test(digit)) return;

    rawValue += digit;

    const number = parseFloat(rawValue) / 100;

    inputSolution.value = number.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  });
});
