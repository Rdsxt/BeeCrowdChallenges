var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C, D] = lines

const dif = (A * B - C * D)

console.log(`DIFERENCA = ${dif}`)