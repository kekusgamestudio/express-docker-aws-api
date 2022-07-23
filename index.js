const { request, response } = require('express');
const fs = require('fs');
const express = require('express');

const fileName = './store/todos.json';

const app = express();

app.get('/', (request, response) => {
  return response.send('Hello express!');
})

app.get('/todos', (request, response) => {
  const showPendingOnly = request.query.show_pending;

  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      return response.status(500).send('Something went wrong');
    }
    const todos = JSON.parse(data);

    if (showPendingOnly === 'true') {
      return response.json({ todos: todos.filter(t => { return t.complete === false }) });
    } else {
      return response.json({ todos: todos });
    }

  });
})

app.put('/todos/:id/complete', (request, response) => {
  const id = request.params.id;

  const findTodoById = (todos, id) => {
    for (let ii = 0; ii < todos.length; ii++) {
      if (todos[ii].id === parseInt(id))
        return ii;
    }
    return -1
  }

  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      return response.status(500).send('Something went wrong');
    }

    const todos = JSON.parse(data);
    const idx = findTodoById(todos, id);

    if (idx === -1) {
      return response.status(404).send('Index not found');

    }

    todos[idx].complete = true;
    fs.writeFile('./store/todos.json', JSON.stringify(todos), () => {
      console.log('File item updated');
      return response.json({ 'status': 'ok' });
    });
  });
})

app.listen(3000, () => {
  console.log('Application running on http://localhost:3000');
})