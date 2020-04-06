const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/todos.db'
})

const Todos = db.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    due: {
        type: Sequelize.DATE
    }
})

module.exports = {
    db, Todos
}