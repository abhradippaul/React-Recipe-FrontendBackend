require("dotenv").config()
require("./connection")
const express = require("express")
const app = express()
const port = process.env.PORT || 2000
app.use(express.json())
app.use(express.urlencoded({extended : true}))
const router = require("./routes/recipe")
app.use("/recipe",router)

app.get("/",(req,res)=>{
    res.send("React recipe backend")
})

app.listen(port,()=>{
    console.log("Server connected")
})