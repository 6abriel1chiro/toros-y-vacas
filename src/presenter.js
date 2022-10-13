import BullsAndCows from "./game";

let secretCode = document.querySelector("#code");
let guess = document.querySelector("#codeGuess");
const registerButton = document.querySelector("#register");
const checkbox = document.querySelector("#showCode");
let guessButton = document.querySelector("#guess");
const resultDiv = document.querySelector("#result");
const AttemptsDiv = document.querySelector("#Attempts");
const primesInCode = document.querySelector("#primes");

let primes;


let game = new BullsAndCows();
let result = "";

function endGame(result){
  if (result == "GUESSER WINS" || result == "Guess limit reached"){
    guessButton.disabled = true;
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  }
}

registerButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (secretCode.value.trim() != ""){
    let code = secretCode.value;

    primes = game.lookForBisons(code);

    guessButton.disabled = false;
    guess.disabled = false
    secretCode.disabled = true;
    registerButton.disabled = true;
    AttemptsDiv.innerHTML = "<p>" + "Remaining attempts = " + game.attempts + "/5 </p>";
    primesInCode.innerHTML = "<p>" + "Bisons in code = " + primes + " </p>";

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
    resultDiv.innerHTML = "<p>" + "Result = " + result + "</p>";
    AttemptsDiv.innerHTML = "<p>" + "Remaining attempts = " + game.attempts + "/5 </p>";
    endGame(result);
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
