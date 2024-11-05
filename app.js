const express = require('express');
const path = require('path');
const app = express();
const quotes = require('./quotes.json');

const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Endpoint para fornecer uma citação aleatória
app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


