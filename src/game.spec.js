import BullsAndCows from "./game.js"

describe("Bulls And Cows get result", () => {
  let game
  beforeEach( () => {
     game = new BullsAndCows()
  });
  it("returns ! if the player guesses right", () => {
    expect(game.play("21", "20")).toEqual("!#%");
  });
  it("return ! as many times as the player guessed correctly",() => {
    expect(game.play("21341", "25948")).toEqual("!!%%%%");
  });
  it("return * for each correct guess in an incorrect position",() => {
    expect(game.play("21345", "27314")).toEqual("!!**%%%%%");
  });

  it("return GUESSER WINS if player 1 guessed correctly the secret code",() => {
    expect(game.play("11111", "11111")).toEqual("GUESSER WINS");
  });
});
//  21341 22314 !!****

describe("Bulls and cows verify string length", () => {
  let game
  beforeEach( () => {
     game = new BullsAndCows()
  });
  it("alert if guess is too short",() => {
    expect(game.play("21345", "24")).toEqual("guess is too short");
  });
  
  it("alert if guess is too long",() => {
    expect(game.play("21345", "246846851561")).toEqual("guess is too long");
  });
});


describe("Limit Attmemps for player 2", () =>{
  let game = new BullsAndCows();
  it("first Attempt", () => {
    expect(game.play("21", "20")).toEqual("!#%");
  });
  it("second Attempt", () => {
    expect(game.play("21", "20")).toEqual("!#%");
  });
  it("third Attempt", () => {
    expect(game.play("21", "20")).toEqual("!#%");
  });
  it("fourth Attempt", () => {
    expect(game.play("21", "20")).toEqual("!#%");
  });
  it("fifth intento", () => {
    expect(game.play("21", "20")).toEqual("!#%");
  });
  it("Guess limit reached", () => {
    expect(game.play("21", "20")).toEqual("Guess limit reached");
  });
});


describe("get veals if guess is 1 number off", () =>{
  let game
  beforeEach( () => {
     game = new BullsAndCows()
  });
  it("return # if substracting 1 to guess returns same number as hidden code",() => {
    expect(game.play("2", "3")).toEqual("#%");
  });
  
  it("return # if adding 1 to guess returns same number as hidden code",() => {
    expect(game.play("3", "2")).toEqual("#%");
  });

  it("string shouldnt return #",() => {
    expect(game.play("cadena1", "string2")).toEqual("!");
  });
});


describe("Return bisons if hidden code has prime number", () =>{
  let game
  beforeEach( () => {
     game = new BullsAndCows()
  });
  it("Return 1 bison",() => {
    expect(game.play("2", "4")).toEqual("%");
  });
  
  it("return 2 bisons",() => {
    expect(game.play("35", "21")).toEqual("%%");
  });

});