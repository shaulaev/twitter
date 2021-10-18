const { Router } = require("express")
const router = Router()

router.use("/user", require("./users.route"))
router.use("/post", require("./posts.route"))
router.use("/comment", require("./comments.route"))

module.exports = router