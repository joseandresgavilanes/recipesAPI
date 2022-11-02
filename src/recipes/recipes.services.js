const recipesControllers = require("./recipes.controller");

const getAllRecipes = (req, res) => {
  recipesControllers
    .getAllRecipes()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getRecipeById = (req, res) => {
  const id = req.params.id;
  recipesControllers
    .getRecipeById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json({ message: `ID: ${id}, doesn't exist` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createRecipe = (req, res) => {
  const { name } = req.body;

  if (name) {
    recipesControllers
      .createRecipe(name)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Invalid data",
      fields: {
        name: "string",
      },
    });
  }
};

const deleteRecipe = (req, res) => {
  const id = req.params.id;
  recipesControllers
    .deleteRecipe(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  deleteRecipe,
};
