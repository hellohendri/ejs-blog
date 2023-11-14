const postModel = require('../models/postModel');

const blogPosts = postModel;

const getPost = (req, res) => {
    let id = req.params.id;
    let post = blogPosts.find(post => post.id == id);
    res.render("post.ejs", { post })
}

const getCreate = (req, res) => {
    res.render("create.ejs")
}

const createPost = (req, res) => {
    let id = blogPosts.length + 1;
    let title = req.body["title"];
    let content = req.body["content"];

    let newPost = {
        id: id,
        title: title,
        content: content
    }

    blogPosts.push(newPost);

    res.redirect("/");
}

const getEdit = (req, res) => {
    let id = req.params.id;
    let post = blogPosts.find(post => post.id == id);
    res.render("edit.ejs", {
        id: post["id"],
        title: post["title"],
        content: post["content"]
    })
}

const editPost = (req, res) => {
    let id = req.body["id"];
    let post = blogPosts.find(post => post.id == id);
    post.title = req.body["title"];
    post.content = req.body["content"];

    res.redirect("/");
}

const deletePost = (req, res) => {
    let postId = req.params["id"];
    let postIndex = blogPosts.findIndex(post => post.id == postId)

    if (postIndex > -1) {
        blogPosts.splice(postIndex, 1);
    }

    res.redirect("/");

}

module.exports = { getPost, getCreate, createPost, getEdit, editPost, deletePost }