const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const bookAnirudh= new mongoose.Schema({
    name : String,
    author:{
        type: ObjectId,
        required:true,
        ref:"Author"
    },
    isHardCover: {
        default: false
    },
    price:Number,
    rating:Number,
    publisher:{
        type:ObjectId,
        required: true,
        ref: "publisher1"
    }
})

module.exports = mongoose.model("book",bookAnirudh)