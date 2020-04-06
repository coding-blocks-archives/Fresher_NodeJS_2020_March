const { db, Users } = require('./db')

// db.sync()
//   .then(() => {
//     console.log('db works')

//     Users.create({
//       name: 'John Doe',
//       age: 20,
//     })

//   })
//   .catch((err) => {
//     console.error(err)
//   })

async function task() {
  // this will modify columns with new changes in
  // model definition without data loss
  //   await db.sync({ alter: true })

  // this will delete table and create fresh
  // old data will be lost
  //   await db.sync({ force: true })

  await db.sync()

  await Users.bulkCreate([
    { name: 'Ram', age: 20 },
    { name: 'Shyam', age: 21 },
    { name: 'Neha', age: 22 },
    { name: 'Rahul', age: 23 },
    { name: 'Kriti', age: 24 },
    { name: 'Priya', age: 25 },
    { name: 'Kumar', age: 26 },
    { name: 'Rahul', age: 27 },
  ])
}

task()
