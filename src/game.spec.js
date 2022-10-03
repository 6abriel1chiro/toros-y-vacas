import VacasToros from "./game"
describe("Vacas y toros", () => {


  it("devuelve * su el usuario acierta", () => {
    let game = new VacasToros;
    expect(game.play("2", "2")).toEqual("*");
  });

});
