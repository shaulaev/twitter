const Comment = require("../models/Comment.model")

module.exports.commentController = {
  addComment: async (req, res) => {
    try {
      await Comment.create({
        text: req.body.text,
        userId: req.params.userId,
        postId: req.params.postId
      })
      res.send("Комментарий добавлен");
    }
    catch (e) {
      res.send("error")
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id)
      res.send("Пользователь удален")
    }
    catch (e) {
      res.send("error")
    }
  },
  getAllComment: async (req, res) => {
    try {
      const users = await Comment.find()
      res.json(users)
    }
    catch (e) {
      res.send("error")
    }
  },
  editComment: async (req, res) => {
    try {
      await Comment.findByIdAndUpdate((req.params.id), { $set: { name: req.body.name } })
      res.send("Пользователь удален")
    }
    catch (e) {
      res.send("error")
    }
  }
}