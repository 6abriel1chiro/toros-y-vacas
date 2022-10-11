import BullsAndCows from "./game.js"

describe("Vacas y toros obtener resultado", () => {
  let game
  beforeEach( () => {
     game = new BullsAndCows()
  });
  it("devuelve ! su el usuario acierta", () => {
    expect(game.play("21", "20")).toEqual("!");
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
    expect(game.play("21345", "24")).toEqual("la adivinanza es muy corta");
  });
  
  it("evitar cadenas de distintos tamaños",() => {
    expect(game.play("21345", "246846851561")).toEqual("la adivinanza es muy larga");
  });
});


describe("Limite de intentos Vacas y toros", () =>{
  let game = new BullsAndCows();
  it("primer intento", () => {
    expect(game.play("21", "20")).toEqual("!");
  });
  it("segundo intento", () => {
    expect(game.play("21", "20")).toEqual("!");
  });
  it("tercer intento", () => {
    expect(game.play("21", "20")).toEqual("!");
  });
  it("cuarto intento", () => {
    expect(game.play("21", "20")).toEqual("!");
  });
  it("quinto intento", () => {
    expect(game.play("21", "20")).toEqual("!");
  });
  it("limite de intentos alcanzados", () => {
    expect(game.play("21", "20")).toEqual("limite de intentos alcanzados");
  });
});
