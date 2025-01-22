const express = require("express");
const route = express.Router();
const Blogs = require("../models/blogs");

route.get("/", async (req, res) => {
  console.log("came to all blogs")
  const blogs = await Blogs.find();
  console.log("all blogs: ", blogs)
  res.send(blogs);
});

module.exports = route;
