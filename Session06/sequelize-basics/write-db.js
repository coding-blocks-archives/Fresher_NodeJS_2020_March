const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/test.db',
})

const Users = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue: 18,
  },
})

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
  await db.sync({force: true})
  await Users.create({name: 'Ron Weasley'})
}

task()
