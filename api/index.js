const express = require('express');
const serverless = require('serverless-http');
const app = express();

const usuarios = [
  { nome: "Ana", cidade: "São Paulo" },
  { nome: "Nicolas", cidade: "Rio de Janeiro" },
  { nome: "China", cidade: "Belo Horizonte" },
  { nome: "Jeffin", cidade: "São Paulo" },
  { nome: "Jhon", cidade: "Curitiba" },
  { nome: "Hivina", cidade: "Rio de Janeiro" },
  { nome: "Rudha", cidade: "Porto Alegre" },
  { nome: "Breno", cidade: "Recife" },
  { nome: "Alex", cidade: "Fortaleza" },
  { nome: "Natalia", cidade: "São Paulo" }
];

app.get('/', (req, res) => {
  res.send('API de Usuários Web 2. Use /usuario/todos para listar todos os usuários, /usuario/cidade/<cidade> pára filtrar por cidade ou /usuario/sorteado para retornar um usuário aleatório!');
});

app.get('/usuario/todos', (req, res) => {
  res.json(usuarios);
});

app.get('/usuario/cidade/:cidade', (req, res) => {
  const cidade = req.params.cidade.toLowerCase();
  const filtrados = usuarios.filter(u => u.cidade.toLowerCase() === cidade);
  res.json(filtrados);
});

app.get('/usuario/sorteado', (req, res) => {
  const sorteado = usuarios[Math.floor(Math.random() * usuarios.length)];
  res.json(sorteado);
});

module.exports = app;
module.exports.handler = serverless(app); 
