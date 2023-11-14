const express = require('express');
const router = express.Router();

const postController = require('../controller/postController');

router.post("/:id", postController.deletePost)

module.exports = router;