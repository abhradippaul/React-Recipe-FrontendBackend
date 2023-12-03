const mongoose = require("mongoose")
const schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : Array,
        required : true
    },
    imagepath : String
})

module.exports = mongoose.model("recipe",schema)