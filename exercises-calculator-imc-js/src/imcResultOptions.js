const options = [
  {
    min: 0,
    max: 18.5,
    description: "Abaixo do peso",
  },
  {
    min: 18.5,
    max: 24.9,
    description: "Peso normal",
  },
  {
    min: 25,
    max: 29.9,
    description: "Sobrepeso",
  },
  {
    min: 30,
    max: 34.9,
    description: "Obesidade grau I",
  },
  {
    min: 35,
    max: 39.9,
    description: "Obesidade grau II",
  },
  {
    min: 40,
    max: Infinity,
    description: "Obesidade grau III",
  },
];

module.exports = options;
