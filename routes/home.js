const express = require('express');
const router = express.Router();

const homePage = require('../controller/homeController');

router.get("/", homePage.homePage);

module.exports = router;