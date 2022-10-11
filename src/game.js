class BullsAndCows{

    constructor(){
        this.hiddenCode = ""
        this.guessedCode = ""
        this.result = ""
        this.primes = ""

        this.attempts = 5
    }


    #checkCharIsEqual(index1, index2){
        if(this.hiddenCode[index1] == this.guessedCode[index2]) return true;
    }


    #checkCharIsDifferentByOne(index1, index2){

        const codeToNumber = Number.parseInt(this.hiddenCode[index1]);
        const guessToNumber = Number.parseInt(this.guessedCode[index2]);


        if( Math.abs(codeToNumber-guessToNumber)===1) return true;
    }



    #checkCharIsPrime(index){
    const codeToNumber = Number.parseInt(this.hiddenCode[index]);


        var sqrtnum=Math.floor(Math.sqrt(codeToNumber));
        var prime = codeToNumber != 1;
        for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
            if(codeToNumber % i == 0) {
                prime = false;
                break;
            }
        }
        return prime;
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

    #vealGuessNumber(){
        for(let i = 0; i<this.guessedCode.length ; i++){
                if ((this.#checkCharIsDifferentByOne(i,i))) {
                    this.result += "#";
                }
            
        }
    }

    #processGameResult()
    {
        this.attempts -= 1;
        if(this.#areStringsEqual() == false) 
            return this.result = this.#compareStringsLength();  

        this.#bullsGuessNumber();
        this.#cowsGuessNumber();
        //this.#vealGuessNumber(); for future updates

    }

    lookForBisons(player1Code)
    {
        this.hiddenCode = player1Code;
        this.primes = "";
        for(let i = 0; i<this.hiddenCode.length ; i++)
        {
            if ((this.#checkCharIsPrime(i))) {
                this.primes += "%";
            }
            return this.primes;
        
            }       
    }

    play(player1Code, player2Guess)
    {
        this.hiddenCode = player1Code;
        this.guessedCode = player2Guess;
        this.result = "";

        if(this.attempts > 0){

        if (this.hiddenCode.length === 1 &&  this.guessedCode.length === 1) {
            this.#vealGuessNumber();   
            return this.result;
  
            }       
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



