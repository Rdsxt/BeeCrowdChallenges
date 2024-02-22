var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prod1 = parseInt(lines[0])
var prod2 = parseInt(lines[1])

var resultado = prod1 + prod2

console.log(`PROD = ${resultado}`)