const Ingredients = require("../models/ingredients.models");

const getAllIngredients = async () => {
  const data = await Ingredients.findAll();
  return data;
};

const getIngredientById = async (id) => {
  const data = await Ingredients.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createIngredient = async (name) => {
  const data = await Ingredients.create({
    name,
  });
  return data;
};

const deleteIngredient = async (id) => {
  const data = await Ingredients.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredient,
  deleteIngredient,
};
