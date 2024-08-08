const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configura la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configura las rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
