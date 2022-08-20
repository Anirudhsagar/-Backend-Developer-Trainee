const mongoose = require("mongoose")


const authorAnirudh= new mongoose.Schema({
    authorName : String,
    age : Number,
    address: String,
    rating: Number
})

module.exports = mongoose.model("Author", authorAnirudh )

