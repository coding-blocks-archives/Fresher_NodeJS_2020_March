const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let todos = [
  { task: 'Learn NodeJS', done: false, due: '2020-04-05' },
  { task: 'Learn SQL', done: false, due: '2020-04-06' },
  { task: 'Learn HTML and CSS', done: true, due: '2020-04-01' }
]

app.use('/', express.static(__dirname + '/public'))

app.get('/todos', (req, res) => {
  const resp = todos.map((t, i) => ({
    id: i + 1,
    task: t.task,
    done: t.done,
    due: t.due
  }))

  res.send(resp)
})

app.get('/todos/:id', (req, res) => {
  if (isNaN(Number(req.params.id))) {
    return res.status(400).send({
      error: 'todo id must be an integer'
    })
  }
  const idx = req.params.id - 1

  if (!todos[idx]) {
    return res.status(404).send({
      error: 'No todo found with id = ' + req.params.id
    })
  }
  const t = todos[idx]
  res.send({
    id: idx + 1,
    task: t.task,
    done: t.done,
    due: t.due
  })
})

app.post('/todos', (req, res) => {
  if (typeof req.body.task !== 'string') {
    return res.status(400).send({ error: 'Task name not provided' })
  }
  if (req.body.done === 'true') {
    req.body.done = true
  } else {
    req.body.done = false
  }
  todos.push({
    task: req.body.task,
    done: req.body.done,
    due: req.body.due
  })

  res.status(201).send({success: 'New task added', id: todos.length})
})

app.listen(6543)
