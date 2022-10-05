import express from 'express';
import { addPosts, getPosts } from '../controllers/postController.js';

const postRouter=express.Router();

postRouter.post("/add", addPosts);
postRouter.get("/list/:id", getPosts);

export default postRouter;