const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos
app.use(express.static('./'));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para outras páginas
app.get('/:page', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, `${page}.html`));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
}); 