const express = require('express');
const router = express.Router();

const postController = require("../controller/postController");

router.get("/:id", postController.getEdit);
router.post("/", postController.editPost);

module.exports = router;