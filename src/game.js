class VacasToros{

    constructor(){
        this.hiddenCode = ""
        this.guessedCode = ""
        this.resultado = ""
    }

    check_string(){
        if(this.hiddenCode.length != this.guessedCode.length){
            return false
        }
    }

    correct_guess_number(){
        // let min_value = Math.min(this.guessedCode.length, this.hiddenCode.length)
        for(let i =0; i<this.guessedCode.length ; i++){
            if (this.hiddenCode[i] == this.guessedCode[i]) this.resultado += "!";
        }
    }

    semicorrect_guess_number(){
        // let min_value = Math.min(this.guessedCode.length, this.hiddenCode.length)
        for(let i = 0; i<this.guessedCode.length ; i++){
            for(let j = 0; j<this.guessedCode.length ; j++){
                if ((this.hiddenCode[i] == this.guessedCode[j]) && (j != i)) {
                    this.resultado += "*";
                }
            }
        }
    }

    play(player1Code, player2Guess)
    {
        this.hiddenCode = player1Code;
        this.guessedCode = player2Guess;
        if(this.check_string() == false) return "cadenas son de tamaños diferentes"
        this.correct_guess_number()
        this.semicorrect_guess_number()
        return this.resultado
    }
}
export default VacasToros;


