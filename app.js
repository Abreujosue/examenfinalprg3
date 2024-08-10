import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

// Obtiene el directorio actual de este archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configura la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configura las rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
