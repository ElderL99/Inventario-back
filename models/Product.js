const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    required: [true, 'El nombre del producto es obligatorio'],
  },

  description: {
    type: String,
    default: '',
    required: [true, 'La descripción del producto es obligatoria'],
  },

  quantity: {
    type: Number,
    required: true,
    min: 0,
    required: [true, 'La cantidad del producto es obligatoria'],
  },

  category: {
    type: String,
    default: 'General',
    required: [true, 'La categoría del producto es obligatoria'],
  },

  location: {
    type: String,
    default: 'Almacén principal',
    required: [true, 'La ubicación del producto es obligatoria'],
  },

  status: {
    type: String,
    enum: ["disponible", "no disponible"],
    default: 'disponible',
    required: [true, 'El estado del producto es obligatorio'],
  },
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
