var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const raio = Number(lines[0]);

const PI = 3.14159;

const area = PI * raio * raio;

console.log(`A=${area.toFixed(4)}`);