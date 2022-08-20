const mongoose = require("mongoose")



const publisherAnirudh = new mongoose.Schema({
    name: String,
    headQuarter: String
})

module.exports = mongoose.model("publisher1",publisherAnirudh)