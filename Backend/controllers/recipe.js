const model = require("../model/recipeModel")
const showRecipes = async(req,res) =>{
    const data = await model.findOne()
    return res.json(data)
}
const createRecipe = async(req,res) => {
    const data = req.body
    console.log(data)
    if(!data.name || !data.description) {
        return res.send("Invalid Recipe")
    }
    let description = data.description.split(".")
    if(description[description.length-1] === ""){
        description.pop()
    }
    res.send(await model.collection.insertOne({
        name : data.name,
        description : description
    }))
}

module.exports = {
    showRecipes,
    createRecipe
}