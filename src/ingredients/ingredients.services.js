const ingredientsControllers = require("./ingredients.controller");

const getAllIngredients = (req, res) => {
  ingredientsControllers
    .getAllIngredients()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getIngredientById = (req, res) => {
  const id = req.params.id;
  ingredientsControllers
    .getIngredientById(id)
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

const createIngredient = (req, res) => {
  const { name } = req.body;

  if (name) {
    ingredientsControllers
      .createIngredient(name)
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

const deleteIngredient = (req, res) => {
  const id = req.params.id;
  ingredientsControllers
    .deleteIngredient(id)
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
  getAllIngredients,
  getIngredientById,
  createIngredient,
  deleteIngredient,
};
