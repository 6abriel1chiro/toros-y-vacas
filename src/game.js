class VacasToros{

    // constructor(){


    // }
    play(player1Code, player2Guess)
    {
        let resultado =""
        for(let i =0; i<player1Code.length; i++){

            if (player2Guess[i] == player1Code[i]) resultado += "!";
        }
        return resultado;
    }
}
export default VacasToros;


