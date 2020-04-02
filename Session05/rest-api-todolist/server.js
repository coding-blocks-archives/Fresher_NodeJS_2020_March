const express = require('express')

const app = express()

let todos = [
    {task: 'Learn NodeJS', done: false, due: '2020-04-05'},
    {task: 'Learn SQL', done: false, due: '2020-04-06'},
    {task: 'Learn HTML and CSS', done: true, due: '2020-04-01'}
]

app.get('/todos', (req, res) => {
    const resp = todos.map((t, i) => ({
        id: i + 1,
        task: t.task,
        done: t.done,
        due: t.due,
    }))

    res.send(resp)
})

app.get('/todos/:id', (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        res.status(400).send({
            error: 'todo id must be an integer'
        })
        return
    } 
    const idx = req.params.id - 1

    if (!todos[idx]) {
        res.status(404).send({
            error: 'No todo found with id = ' + req.params.id
        })
        return
    }
    const t = todos[idx]
    res.send({
        id: idx + 1,
        task: t.task,
        done: t.done,
        due: t.due,
    })

})


app.listen(6543)