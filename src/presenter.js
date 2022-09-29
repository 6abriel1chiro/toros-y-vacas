import sumar from "./sumador";
import dividir from "./divisor";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-suma-div");
const div3 = document.querySelector("#resultado-divide-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  div3.innerHTML = "<p>" + dividir(firstNumber, secondNumber) + "</p>";

});
