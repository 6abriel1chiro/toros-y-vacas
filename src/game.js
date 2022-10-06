class VacasToros{

    constructor(){
        this.hiddenCode = ""
        this.guessedCode = ""
        this.resultado = ""
    }

    correct_guess_number(){
        //cambiar para verificar el codigo mas corto
        for(let i =0; i<this.guessedCode.length; i++){

            if (this.hiddenCode[i] == this.guessedCode[i]) this.resultado += "!";
        }
    }

    semicorrect_guess_number(){

        for(let i = 0; i<this.guessedCode.length; i++){
            for(let j = 0; j<this.guessedCode.length; j++){
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
        this.correct_guess_number()
        this.semicorrect_guess_number()
        return this.resultado
    }
}
export default VacasToros;


