const calculateImc = require("../src/index");

describe("Tests para a função calculateImc", () => {
  it("should return an error if parameters weight and height are not passed", () => {
    expect(() => calculateImc()).toThrowError("weight and height are required");
  });

  it("should return an error if weight and height cannot be negative", () => {
    expect(() => calculateImc(-1, -3)).toThrowError(
      "weight and height cannot be negative"
    );
  });

  it("should return an error if weight and height are not numbers", () => {
    expect(() => calculateImc("ABC", "Um Metro e oitenta")).toThrowError(
      "weight and/or height are not numbers"
    );
  });

  it("should calculate the IMC", () => {
    expect(calculateImc(45, 160)).toEqual({
      imc: 17,
      description: "Abaixo do peso",
    });

    expect(calculateImc(80, 180)).toEqual({
      imc: 24,
      description: "Peso normal",
    });

    expect(calculateImc(85, 173)).toEqual({
      imc: 28,
      description: "Sobrepeso",
    });

    expect(calculateImc(80, 160)).toEqual({
      imc: 31,
      description: "Obesidade grau I",
    });

    expect(calculateImc(96, 165)).toEqual({
      imc: 35,
      description: "Obesidade grau II",
    });

    expect(calculateImc(99, 150)).toEqual({
      imc: 44,
      description: "Obesidade grau III",
    });
  });
});
