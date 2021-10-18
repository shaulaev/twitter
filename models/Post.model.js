const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
  name: String,
  like: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  }]
})

const Post = mongoose.model("Post", postSchema)
module.exports = Post