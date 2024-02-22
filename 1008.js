var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const num = parseInt(lines[0])
const ht = parseInt(lines[1])
const sal = parseFloat(lines[2])

const salPerHr = ht * sal

console.log(`NUMBER = ${num}`)
console.log(`SALARY = U$ ${salPerHr.toFixed(2)}`)