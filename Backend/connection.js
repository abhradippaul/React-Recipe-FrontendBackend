const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://abhradippaul:${process.env.DB_PASSWORD}@cluster0.6uvhuvg.mongodb.net/?retryWrites=true&w=majority`)