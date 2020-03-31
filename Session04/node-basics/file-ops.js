const fs = require('fs')

console.log('write start', Date.now())
fs.writeFile('myfile.txt', 'fhdfhdfh', err => {
  if (err) console.error(err)
  console.log('actual write end', Date.now())

  console.log('read start', Date.now())
  fs.readFile('myfile1.txt', (err, data) => {
    if (err) throw err
    console.log('read end', Date.now())
    console.log(data.toString())
    console.log('done')

  })


})
