const express = require('express');
const router = express.Router();

const postController = require("../controller/postController");

router.get("/", postController.getCreate);
router.post("/", postController.createPost);

module.exports = router;