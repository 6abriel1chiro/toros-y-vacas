import BullsAndCows from "./game";

const secretCode = document.querySelector("#code");
const guess = document.querySelector("#guess");
const form = document.querySelector("#sumar-form");


let game = null;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const player1Code = Number.parseInt(secretCode.value);
  const player2Guess = Number.parseInt(guess.value);

});
