const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
  text: String,
  userId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  }],
  postId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Post"
  }]
})

const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment