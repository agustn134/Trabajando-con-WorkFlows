const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola desde mi Backend en Vercel de AGUSTIN PARRA - 122100504!');
});

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`Servidor local en puerto ${PORT}`));
}
module.exports = app;