const { readFileSync, writeFileSync, read, write } = require('fs');
// const fs = require('fs');
// fs.readFileSync;

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

//create a file
//flag is to append
writeFileSync('./content/result-syncBuiltinESMExports.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});

