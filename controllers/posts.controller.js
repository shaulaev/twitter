const Post = require("../models/Post.model")

module.exports.postController = {
  addPost: async (req, res) => {
    try {
      await Post.create({
        name: req.body.name
      })
      res.send("Пост добавлен")
    }
    catch (e) {
      res.send("error")
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id)
      res.send("Пользователь удален")
    }
    catch (e) {
      res.send("error")
    }
  },
  getAllPost: async (req, res) => {
    try {
      const users = await Post.find()
      res.json(users)
    }
    catch (e) {
      res.send("error")
    }
  },
  editPost: async (req, res) => {
    try {
      await Post.findByIdAndUpdate((req.params.id), { $set: { name: req.body.name } })
      res.send("Пользователь удален")
    }
    catch (e) {
      res.send("error")
    }
  },
  addLikeToPost: async (req, res) => {
    try {
      await Post.findByIdAndUpdate(req.params.postId, {$push: { like: req.params.userId } })
      res.send("Лайк поставлен")
    }
    catch (e) {
      res.send("error")
    }
  },
  getUsersLikes: async (req, res) => {
    try{
      const likes = await Post.findById(req.params.id)
      res.json(likes.like)
    }catch (e) {
      res.send("error")
    }
  },
  deleteLike: async (req, res) => {
    try{
      const likes = await Post.findByIdAndUpdate((req.params.postId))

    }catch (e) {
      res.json
    }
  }
}