require("dotenv").config()
require("./connection")
const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const router = require("./routes/recipe")
app.use("/recipe", router)

app.get("/", (req, res) => {
    res.send("React recipe backend")
})

app.listen(process.env.PORT, () => {
    console.log("Server connected")
})