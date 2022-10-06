import VacasToros from "./game"

describe("Vacas y toros", () => {
  let game
  beforeEach( () => {
     game = new VacasToros()
  });
  it("devuelve ! su el usuario acierta", () => {
    expect(game.play("2", "2")).toEqual("!");
  });
  it("devolvera la misma cantidad de ! que tenga de aciertos",() => {
    expect(game.play("21341", "25948")).toEqual("!!");
  });
  it("devolvera * por cada numero correcto en posición distinta",() => {
    expect(game.play("21345", "27314")).toEqual("!!**");
  });
});
