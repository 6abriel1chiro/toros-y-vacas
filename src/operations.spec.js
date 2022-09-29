import sumar from "./sumador.js";
import dividir from "./divisor.js"
//code in test file  

describe("Sumar", () => {


  
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("deberia dividir 2 numeros", () => {
    expect(dividir(4, 2)).toEqual(2);
  });


});
describe("valid divisions", () => {
        
    test("n / 0 = infinity", () => {

    expect(dividir(3,0)).toThrowError("Error2");
  });
});
