const express = require('express');
const { getAllPosts, addPost, getPostById, updatePost, deletePost } = require('../controllers/postController');

const postRoutes = express.Router();
postRoutes.get("/", getAllPosts);
postRoutes.get("/:id", getPostById);
postRoutes.post("/", addPost);
postRoutes.put("/:id", updatePost);
postRoutes.delete("/:id", deletePost);

module.exports = postRoutes;
