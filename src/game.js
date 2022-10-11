class BullsAndCows{

    constructor(){
        this.hiddenCode = ""
        this.guessedCode = ""
        this.result = ""
        this.attempts = 5
    }


    #checkCharIsEqual(index1, index2){
        if(this.hiddenCode[index1] == this.guessedCode[index2]) return true;
    }

    #areStringsEqual(){
        if(this.hiddenCode.length != this.guessedCode.length){
            return false
        }
        else{
            return true
        }
    }

    #compareStringsLength(){
        if(this.hiddenCode.length > this.guessedCode.length){
            return "guess is too short"
        }
        if(this.hiddenCode.length < this.guessedCode.length){
            return "guess is too long"
        }
    }

    #bullsGuessNumber(){
        for(let i =0; i<this.guessedCode.length ; i++){
            if (this.#checkCharIsEqual(i,i)) this.result += "!";
        }
    }

    #cowsGuessNumber(){
        for(let i = 0; i<this.guessedCode.length ; i++){
            for(let j = 0; j<this.guessedCode.length ; j++){
                if ((this.#checkCharIsEqual(i,j)) && (j != i)) {
                    this.result += "*";
                }
            }
        }
    }

    #terneraGuessNumber(){
        let guessNumber = parseInt(this.guessedCode);
        let hiddenNumber = parseInt(this.hiddenCode);
        if(!isNaN(guessNumber) || !isNaN(hiddenNumber))
        {
            if (hiddenNumber == guessNumber + 1 || hiddenNumber == guessNumber-1)
            this.result += "#"
        }
    }

    #processGameResult()
    {
        this.attempts -= 1;
        if(this.#areStringsEqual() == false) 
            return this.result = this.#compareStringsLength();  
        this.#bullsGuessNumber();
        this.#cowsGuessNumber();
        this.#terneraGuessNumber();
    }

    play(player1Code, player2Guess)
    {
        this.hiddenCode = player1Code;
        this.guessedCode = player2Guess;
        this.result = "";
        if(this.attempts > 0){
            if (this.hiddenCode == this.guessedCode) {
                return "GUESSER WINS";
            }
            this.#processGameResult();
            return this.result;
        }
        else{
            return "Guess limit reached";
        }
    }
}
export default BullsAndCows;


