const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('../utils/db.js');
const errorHandler = require('../middleware/errorHandler')

dotenv.config();
connectDB();

const app = express();


app.use(cors({
  origin: "https://inventario-front-jade.vercel.app/",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204 
}));






app.use(express.json());


app.use('/api/auth', require('../routes/auth'));
app.use('/api/products', require('../routes/products'));
app.use('/api/entries', require('../routes/entries'));
app.use('/api/exits', require('../routes/exits'));
app.use('/api/users', require('../routes/user.routes'));

app.get('/', (req, res) => {
  res.json({ message: 'API de Inventario funcionando 🎉' });
});


if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}


app.use(errorHandler);

module.exports = app;
