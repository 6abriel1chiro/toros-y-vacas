import BullsAndCows from "./game.js"

describe("Vacas y toros obtener resultado", () => {
  let game
  beforeEach( () => {
     game = new BullsAndCows()
  });
  it("devuelve ! si el usuario acierta una vez", () => {
    expect(game.play("21", "27")).toEqual("!");
  });
  it("devolvera la misma cantidad de ! que tenga de aciertos",() => {
    expect(game.play("21341", "25948")).toEqual("!!");
  });
  it("devolvera * por cada numero correcto en posición distinta",() => {
    expect(game.play("21345", "27314")).toEqual("!!**");
  });

  it("devolvera GUESSER WINS(EL ADIVINADOR GANA ) SI LAS CADENAS SON IGUALES",() => {
    expect(game.play("11111", "11111")).toEqual("GUESSER WINS");
  });
});
//  21341 22314 !!****

describe("Vacas y toros controlar tamaño cadena", () => {
  let game
  beforeEach( () => {
     game = new BullsAndCows()
  });
  it("evitar cadenas de distintos tamaños",() => {
    expect(game.play("21345", "24")).toEqual("guess is too short");
  });
  
  it("evitar cadenas de distintos tamaños",() => {
    expect(game.play("21345", "246846851561")).toEqual("guess is too long");
  });
});


describe("Limite de intentos Vacas y toros", () =>{
  let game = new BullsAndCows();
  it("primer intento", () => {
    expect(game.play("21", "27")).toEqual("!");
  });
  it("segundo intento", () => {
    expect(game.play("21", "26")).toEqual("!");
  });
  it("tercer intento", () => {
    expect(game.play("21", "25")).toEqual("!");
  });
  it("cuarto intento", () => {
    expect(game.play("21", "24")).toEqual("!");
  });
  it("quinto intento", () => {
    expect(game.play("21", "23")).toEqual("!");
  });
  it("limite de intentos alcanzados", () => {
    expect(game.play("21", "28")).toEqual("Guess limit reached");
  });
});



describe("revision terneras y bisontes", () =>{
  let game = new BullsAndCows();
  it("devuelve una ternera #", () => {
    expect(game.play("4", "5")).toEqual("#");
  });

  it("devuelve vacio si no es ternera", () => {
    expect(game.play("3", "5")).toEqual("");
  });


});
