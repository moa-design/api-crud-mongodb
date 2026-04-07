const mongoose = require('mongoose');
const Category = require('../models/categoryModel');

const validateObjectId = (id, entityName = 'recurso') => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error(`ID de ${entityName} inválido`);
    error.statusCode = 400;
    throw error;
  }
};

const createCategory = async (data) => {
  const category = await Category.create(data);
  return category;
};

const getAllCategories = async () => {
  return Category.find().sort({ createdAt: -1 });
};

const getCategoryById = async (id) => {
  validateObjectId(id, 'categoría');

  const category = await Category.findById(id);
  if (!category) {
    const error = new Error('Categoría no encontrada');
    error.statusCode = 404;
    throw error;
  }

  return category;
};

const updateCategory = async (id, data) => {
  validateObjectId(id, 'categoría');

  const category = await Category.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });

  if (!category) {
    const error = new Error('Categoría no encontrada');
    error.statusCode = 404;
    throw error;
  }

  return category;
};

const deleteCategory = async (id) => {
  validateObjectId(id, 'categoría');

  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    const error = new Error('Categoría no encontrada');
    error.statusCode = 404;
    throw error;
  }

  return category;
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
