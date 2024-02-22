var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const space = ' '
const [cod1, num1, valor1] = lines[0].split(space)
const [cod2, num2, valor2] = lines[1].split(space)

const valorPagar = (num1 * valor1) + (num2 * valor2)

console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`)