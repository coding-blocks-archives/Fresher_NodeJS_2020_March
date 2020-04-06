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
    { name: 'Raghu', age: 20 },
    { name: 'Prabhas', age: 21 },
    { name: 'Rohan', age: 22 },
    { name: 'Raashi', age: 23 },
    { name: 'Kaman', age: 24 },
    { name: 'Pankaj', age: 25 },
    { name: 'Vishal', age: 26 },
    { name: 'Naina', age: 27 },
  ])
}

task()
