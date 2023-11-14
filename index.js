const express = require('express');

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const homeRoutes = require("./routes/home");
const getPost = require("./routes/getPost");
const createPost = require("./routes/createPost");
const editPost = require("./routes/editPost");
const deletePost = require("./routes/deletePost");

app.use("/", homeRoutes);
app.use("/post", getPost);
app.use("/create", createPost);
app.use("/edit", editPost);
app.use("/delete", deletePost);

app.listen(port, () => {
    console.log(`App listening on PORT: ${port}`);
});