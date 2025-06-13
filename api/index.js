const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('../utils/db.js');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('../routes/auth'));


app.get('/', (req, res) => {
  res.json({ message: 'API de Inventario funcionando 🎉' });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
