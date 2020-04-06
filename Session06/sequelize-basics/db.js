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

module.exports = {
    db, Users
}