const options = require('./imcResultOptions')


function calculateImc(weight = '', height = '') {
  treatError(weight, height)
  const imcValue = Math.floor(weight / Math.pow(height, 2) * 10000)
  for (i = 0; i < options.length; i++) {
    if (imcValue >= options[i].min && imcValue <= options[i].max) {
      imcCalculado = { "imc": imcValue, "description": options[i].description }
    }
  }
  return imcCalculado
}

function treatError(weight, height) {
  if (weight === '' || height === '') {
    throw new Error("weight and height are required")
  }

  else if (weight < 0 || height < 0) {
    throw new Error("weight and height cannot be negative")
  }

  else if (typeof (weight) != 'number' || typeof (height) != 'number') {
    throw new Error("weight and/or height are not numbers")
  }
}

module.exports = calculateImc;


