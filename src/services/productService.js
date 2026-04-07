const mongoose = require('mongoose');
const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

const validateObjectId = (id, entityName = 'recurso') => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error(`ID de ${entityName} inválido`);
    error.statusCode = 400;
    throw error;
  }
};

const ensureCategoryExists = async (categoryId) => {
  validateObjectId(categoryId, 'categoría');
  const category = await Category.findById(categoryId);

  if (!category) {
    const error = new Error('La categoría indicada no existe');
    error.statusCode = 400;
    throw error;
  }
};

const createProduct = async (data) => {
  await ensureCategoryExists(data.category);
  const product = await Product.create(data);
  return product;
};

const getAllProducts = async () => {
  return Product.find()
    .populate('category')
    .sort({ createdAt: -1 });
};

const getProductById = async (id) => {
  validateObjectId(id, 'producto');

  const product = await Product.findById(id).populate('category');
  if (!product) {
    const error = new Error('Producto no encontrado');
    error.statusCode = 404;
    throw error;
  }

  return product;
};

const updateProduct = async (id, data) => {
  validateObjectId(id, 'producto');

  if (data.category) {
    await ensureCategoryExists(data.category);
  }

  const product = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  }).populate('category');

  if (!product) {
    const error = new Error('Producto no encontrado');
    error.statusCode = 404;
    throw error;
  }

  return product;
};

const deleteProduct = async (id) => {
  validateObjectId(id, 'producto');

  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    const error = new Error('Producto no encontrado');
    error.statusCode = 404;
    throw error;
  }

  return product;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
