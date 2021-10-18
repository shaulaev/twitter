const { Router } = require("express")
const { commentController }  = require("../controllers/comments.controller")
const router = Router()

router.get("/", commentController.getAllComment)
router.post("/:userId/post/:postId", commentController.addComment)
router.delete("/:id", commentController.deleteComment)
router.patch("/:id", commentController.editComment)

module.exports = router