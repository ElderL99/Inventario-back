const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    default: '',
  },

  quantity: {
    type: Number,
    required: true,
    min: 0,
  },

  category: {
    type: String,
    default: 'General',
  },

  location: {
    type: String,
    default: 'Almacén principal',
  },

  status: {
    type: String,
    enum: ['disponible', 'reservado', 'dañado', 'baja'],
    default: 'disponible',
  },
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
