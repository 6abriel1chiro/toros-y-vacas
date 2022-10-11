class BullsAndCows{

    constructor(){
        this.hiddenCode = ""
        this.guessedCode = ""
        this.result = ""
        this.tries = 5
    }


    #checkCharIsEqual(index1, index2){
        if(this.hiddenCode[index1] == this.guessedCode[index2]) return true;
    }

    #areStringsEqual(){
        if(this.hiddenCode.length != this.guessedCode.length){
            return false
        }
    }

    #compareStringsLength(){
        if(this.hiddenCode.length > this.guessedCode.length){
            return "la adivinanza es muy corta"
        }
        if(this.hiddenCode.length < this.guessedCode.length){
            return "la adivinanza es muy larga"
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

    #processGameResult()
    {
        this.tries -= 1;
        if(this.#areStringsEqual() == false) 
            return this.result = this.#compareStringsLength();  
        this.#bullsGuessNumber();
        this.#cowsGuessNumber();
    }

    play(player1Code, player2Guess)
    {
        this.hiddenCode = player1Code;
        this.guessedCode = player2Guess;
        this.result = "";
        if(this.tries > 0){
            if (this.hiddenCode == this.guessedCode) {
                return "GUESSER WINS";
            }
            this.#processGameResult();
            return this.result;
        }
        else{
            return "limite de intentos alcanzados";
        }
    }
}
export default BullsAndCows;


