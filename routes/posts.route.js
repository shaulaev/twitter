const { Router } = require("express")
const { postController }  = require("../controllers/posts.controller")
const router = Router()

router.get("/", postController.getAllPost)
router.post("/", postController.addPost)
router.delete("/:id", postController.deletePost)
router.patch("/:id", postController.editPost)
router.patch("/:postId/user/:userId", postController.addLikeToPost)
router.get("/like/:id", postController.getUsersLikes)
router.patch("/:postId/like/:userId")

module.exports = router