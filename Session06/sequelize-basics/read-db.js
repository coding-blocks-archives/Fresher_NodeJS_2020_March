const { db, Users } = require('./db')
const { Op } = require('sequelize')

async function task() {
  await db.sync()

  const users = await Users.findAll({
    attributes: ['name', 'age'], // SELCECT name, age FROM users,
    where: {
      [Op.and]: [               // WHERE age > 21 AND name LIKE 'R%
          { age: { [Op.gt]: 21 } }, 
          { name: { [Op.like]: 'R%' } }
        ],
    },
    order: [                    // ORDER BY age DESC, name ASC
        ['age', 'DESC'],
        ['name', 'ASC']
    ] 
  })
  console.log('AGE \t | NAME')
  console.log('=============')
  for (let user of users) {
    console.log(`${user.age} \t | ${user.name}`)
  }
}

task()
