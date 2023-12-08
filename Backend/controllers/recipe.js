const model = require("../model/recipeModel")
const showRecipes = async(req,res) =>{
    let data 
    if(req.query.name == undefined){
        data = await model.find()
    }
    else{
        data = await model.find(req.query)
    }
    console.log(req.query)
    return res.send(data)
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
        description : description,
        imagepath : data.imagepath
    }))
}

module.exports = {
    showRecipes,
    createRecipe
}