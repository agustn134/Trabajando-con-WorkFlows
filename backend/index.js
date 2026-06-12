const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola desde mi Backend en Vercel de AGUSTIN PARRA!');
});

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`Servidor local en puerto ${PORT}`));
}

// Ejemplo de modificación en el endpoint principal
app.get('/', (req, res) => {
    res.send('¡Hola! Backend funcionando. Hecho por Agustín López Parra - 122100504');
});

// O en el console.log de inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log('Iniciado por: Agustín López Parra');
});


module.exports = app;