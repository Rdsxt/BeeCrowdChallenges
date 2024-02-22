var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0])
var B = Number(lines[1])

var media = (3.5 * A + 7.5 * B) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)
