const express = require('express');
const serverless = require('serverless-http'); // Wrapper para rodar no Vercel

const app = express();

const usuarios = [
  { nome: "Ana", cidade: "São Paulo" },
  { nome: "Bruno", cidade: "Rio de Janeiro" },
  { nome: "Carla", cidade: "Belo Horizonte" },
  { nome: "Daniel", cidade: "São Paulo" },
  { nome: "Eduardo", cidade: "Curitiba" },
  { nome: "Fernanda", cidade: "Rio de Janeiro" },
  { nome: "Gabriel", cidade: "Porto Alegre" },
  { nome: "Helena", cidade: "Recife" },
  { nome: "Igor", cidade: "Fortaleza" },
  { nome: "Juliana", cidade: "São Paulo" }
];

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
module.exports.handler = serverless(app); // importante!
