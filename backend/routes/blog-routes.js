import express from 'express';
import { addBlog, deletBlog, getAllBlogs, getById, getByUserId, updateBlog } from '../controllers/blog-controller.js';
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deletBlog);
blogRouter.get('/user/:id',getByUserId);

export default blogRouter;