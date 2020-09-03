//Route Params = /users/30
//Query Params = ?name=Joedes
//Request Body = {"name": "Joedes Junior"}

const express = require('express'); 
const { response } = require('express');

const server = express(); 

server.use(express.json());

//CRUD - Create, Read, Update, Delete

const users = ['Pedro', 'Cássio', 'Diego', 'Marcelo'];

//Route list All users
server.get('/users', (require, response) => {
  return response.json(users);
})

//Route list users for param
server.get('/users/:index', (require, response) => {
  const {index} = require.params;
  return response.json(users[index]);
})

//Route Insert User
server.post('/users', (require, response) => {
  const { name } = require.body;
  users.push(name);
  return response.json(users);
})

//Route Update User
server.put('/users/:index', (require, response) => {
  const { index } = require.params; 
  const { name } = require.body;
  users[index] = name;
  return response.json(users);
})

//Route Delete User
server.delete('/users/:index', (require, response) => {
  const { index } = require.params; 
  users.splice(index, 1); 
  return response.json(users);
})


server.listen(3333);