import BullsAndCows from "./game";

let secretCode = document.querySelector("#code");
let guess = document.querySelector("#codeGuess");
const registerButton = document.querySelector("#register");
const checkbox = document.querySelector("#showCode");
let guessButton = document.querySelector("#guess")
const resultDiv = document.querySelector("#result")


let game = new BullsAndCows();
let result = "";

registerButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (secretCode.value.trim() != ""){
    guessButton.disabled = false;
    guess.disabled = false
  }
  else{
    alert("Ingrese un codigo por favor")
  }

});


guessButton.addEventListener("click", (event)=>{
  if(guess.value.trim() != "")
  {
    let player1Code = secretCode.value;
    let player2Guess = guess.value;
    result = game.play(player1Code, player2Guess);
    resultDiv.innerHTML = "<p>" + "Resultado = " + result + "</p>";
  }
  else{
    alert("Ingrese una adivinanza por favor")
  }
})


checkbox.addEventListener("click", (event) => {
  var x = document.getElementById("code");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
})
