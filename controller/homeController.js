const postModel = require('../models/postModel');

const blogPosts = postModel;

const homePage = (req, res) => {
    res.render("index.ejs", { blogPosts })
}

module.exports = { homePage }