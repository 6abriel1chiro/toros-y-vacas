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

    #areStringsSameSize(){
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
    #checkCharIsDifferentByOne(index1, index2){

        const codeToNumber = Number.parseInt(this.hiddenCode[index1]);
        const guessToNumber = Number.parseInt(this.guessedCode[index2]);


        if( Math.abs(codeToNumber-guessToNumber)===1) return true;
    }

 
    #vealsGuessNumber(){
        for(let i = 0; i<this.guessedCode.length ; i++){
                if ((this.#checkCharIsDifferentByOne(i,i))) {
                    this.result += "#";
                }
        }
    }


    #processGameResult()
    {
        this.attempts -= 1;
        if(this.#areStringsSameSize() == false) 
            return this.result = this.#compareStringsLength();  
        this.#bullsGuessNumber();
        this.#cowsGuessNumber();
        this.#vealsGuessNumber();

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

    lookForBisons(secretCode)
{
    return "%";
}
    
}


export default BullsAndCows;


