const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola desde mi Backend en Vercel AGUSTIN!');
});

// Iniciamos el servidor con app.listen SOLO para entorno local
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`Servidor local en puerto ${PORT}`));
}

// Exportamos la app para que Vercel la ejecute como Serverless Function
module.exports = app;