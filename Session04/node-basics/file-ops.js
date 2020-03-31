const fs = require('fs')

console.log('write start', Date.now())
fs.writeFileSync('myfile.txt', 'Hello World')
console.log('write end', Date.now())

console.log('read start', Date.now())
const data = fs.readFileSync('myfile.txt')
console.log('read end', Date.now())

console.log(data.toString())

