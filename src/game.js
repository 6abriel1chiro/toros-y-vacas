class BullsAndCows{

    constructor(){
        this.hiddenCode = ""
        this.guessedCode = ""
        this.result = ""
    }


    #check_code_isEqual(index1, index2){
        if(this.hiddenCode[index1] == this.guessedCode[index2]) return true;
    }

    #check_string(){
        if(this.hiddenCode.length != this.guessedCode.length){
            return false
        }
    }

    #compare_strings(){
        if(this.hiddenCode.length > this.guessedCode.length){
            return "la adivinanza es muy corta"
        }
        if(this.hiddenCode.length < this.guessedCode.length){
            return "la adivinanza es muy larga"
        }
    }

    #bulls_guess_number(){
        for(let i =0; i<this.guessedCode.length ; i++){
            if (this.#check_code_isEqual(i,i)) this.result += "!";
        }
    }

    #cows_guess_number(){
        for(let i = 0; i<this.guessedCode.length ; i++){
            for(let j = 0; j<this.guessedCode.length ; j++){
                if ((this.#check_code_isEqual(i,j)) && (j != i)) {
                    this.result += "*";
                }
            }
        }
    }

    play(player1Code, player2Guess)
    {
        this.hiddenCode = player1Code;
        this.guessedCode = player2Guess;

        if (this.hiddenCode == this.guessedCode) {
           // alert("GUESSER WINS");
            return "GUESSER WINS";
        }

        if(this.#check_string() == false) 
            return this.#compare_strings();  
        this.#bulls_guess_number();
        this.#cows_guess_number();
        return this.result;
    }
}
export default BullsAndCows;


