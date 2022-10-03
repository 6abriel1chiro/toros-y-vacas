class VacasToros{

    constructor(){


    }
    play(player1Code, player2Guess)
    {
        if (player2Guess === player1Code) {
            return "*";
        }
        return "0";
    }
}
  export default VacasToros;


