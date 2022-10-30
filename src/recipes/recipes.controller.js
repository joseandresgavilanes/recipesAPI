const Recipes = require("../models/recipes.models");

const getAllRecipes = async () => {
  const data = await Recipes.findAll();
  return data;
};

const getRecipeById = async (id) => {
  const data = await Recipes.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createRecipe = async (name) => {
  const data = await Recipes.create({
    name,
  });
  return data;
};

const deleteRecipe = async (id) => {
  const data = await Recipes.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  deleteRecipe,
};
