const Post = require("../models/Post.model")
const User = require("../models/User.model")

module.exports.userController = {
  addUser: async (req, res) => {
    try {
      await User.create({
        name: req.body.name
      })
      res.send("Пользователь добавлен")
    }
    catch (e) {
      res.send("error")
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.send("Пользователь удален")
    }
    catch (e) {
      res.send("error")
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    }
    catch (e) {
      res.send("error")
    }
  },
  editUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate((req.params.id), { $set: { name: req.body.name } })
      res.send("Пользователь удален")
    }
    catch (e) {
      res.send("error")
    }
  },
  addUserSaved: async (req, res) => {
    try {
      await User.findByIdAndUpdate((req.params.userId), { $push: { saved: req.params.postId} })
      res.send("Пост сохранен")
    }
    catch (e) {
      res.send("error")
    }
  },
  getUsersSaves: async (req, res) => {
    try{
      const saves = await User.findById(req.params.userId)
      res.json(saves.saved)
    }catch (e) {
      res.send("Ошибка")
    }
  },
  removeUserLikes: async (req, res) => {
    try{
      const likes = await Post.findByIdAndUpdate(req.params.postId, {
        $pull: {like: req.params.userId}
      })
      res.send("Лайк убран")
    }catch (e) {
      res.send("Ошибка")
    }
  },
  removeUserSaving: async (req, res) => {
    try {
      const userNotSaves = await User.findByIdAndUpdate(req.params.userId, {
        $pull: { savings: req.params.postId },
      });
      return res.json("Пользователь убрал сохранёнку");
    } catch (e) {
      return res.json({
        error: "Ошибка при убирании сохранёнки",
      });
    }
  },
}
