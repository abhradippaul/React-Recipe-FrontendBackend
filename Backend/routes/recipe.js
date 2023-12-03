const express = require("express")
const { createRecipe, showRecipes } = require("../controllers/recipe")
const router = express.Router()

router.route("/").get(showRecipes).post(createRecipe)

module.exports = router