const { Router } = require("express")
const { userController }  = require("../controllers/users.controller")
const router = Router()

router.get("/", userController.getAllUsers)
router.post("/", userController.addUser)
router.delete("/:id", userController.deleteUser)
router.patch("/:id", userController.editUser)
router.patch("/:userId/post/:postId", userController.addUserSaved)
router.get("/saves/:userId", userController.getUsersSaves)
router.patch("/:userId/unlike/:postId", userController.removeUserLikes)
router.patch("/:userId/notsave/:postId", userController.removeUserSaving);
module.exports = router