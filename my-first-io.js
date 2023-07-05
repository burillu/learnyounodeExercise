const file = process.argv[2];
const fs = require('node:fs');
const { Buffer } = require('node:buffer');

const content= fs.readFileSync(file).toString();
const lines = content.split('\n');
console.log(lines.length - 1);
// console.log(content.toString());