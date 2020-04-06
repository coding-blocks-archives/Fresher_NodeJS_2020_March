const { Router } = require('express')
const { Todos } = require('../db')

const route = Router()

route.get('/', async (req, res) => {
  const todos = await Todos.findAll()
  res.send(todos)
})

route.get('/:id', async (req, res) => {
  if (isNaN(Number(req.params.id))) {
    return res.status(400).send({
      error: 'todo id must be an integer',
    })
  }
  
  const todo = await Todos.findByPk(req.params.id)

  if (!todo) {
    return res.status(404).send({
      error: 'No todo found with id = ' + req.params.id,
    })
  }
  res.send(todo)
})

route.post('/', async (req, res) => {
  if (typeof req.body.task !== 'string') {
    return res.status(400).send({ error: 'Task name not provided' })
  }
  if (req.body.done === 'true') {
    req.body.done = true
  } else {
    req.body.done = false
  }

  const newTodo = await Todos.create({
      task: req.body.task,
      done: req.body.done,
      due: req.body.due,
  })

  res.status(201).send({ success: 'New task added', data: newTodo })
})

module.exports = route
