require('dotenv').config();

const express = require('express');
const app = express();
const coffeeRoutes = require('./src/routes/coffeeRoutes')

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', coffeeRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});