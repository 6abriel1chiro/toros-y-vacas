class VacasToros{

    constructor(){
        this.hiddenCode = ""
        this.guessedCode = ""
        this.resultado = ""
    }

    check_code_isEqual(index1, index2){
        if(this.hiddenCode[index1] == this.guessedCode[index2]) return true;
    }

    check_string(){
        if(this.hiddenCode.length != this.guessedCode.length){
            return false
        }
    }

    compare_strings(){
        if(this.hiddenCode.length > this.guessedCode.length){
            return "la adivinanza es muy corta"
        }
        if(this.hiddenCode.length < this.guessedCode.length){
            return "la adivinanza es muy larga"
        }
    }

    correct_guess_number(){
        for(let i =0; i<this.guessedCode.length ; i++){
            if (this.check_code_isEqual(i,i)) this.resultado += "!";
        }
    }

    semicorrect_guess_number(){
        for(let i = 0; i<this.guessedCode.length ; i++){
            for(let j = 0; j<this.guessedCode.length ; j++){
                if ((this.check_code_isEqual(i,j)) && (j != i)) {
                    this.resultado += "*";
                }
            }
        }
    }

    play(player1Code, player2Guess)
    {
        this.hiddenCode = player1Code;
        this.guessedCode = player2Guess;
        if(this.check_string() == false) 
            return this.compare_strings()    
        this.correct_guess_number()
        this.semicorrect_guess_number()
        return this.resultado
    }
}
export default VacasToros;

