const express = require("express")
const { createRecipe, showRecipes } = require("../controllers/recipe")
const upload = require("../middleware/uploadImage")
const router = express.Router()

router.route("/").get(showRecipes).post(upload.single("image"),createRecipe)

module.exports = router