import express from 'express';
import { addPosts, getPosts } from '../controllers/postController.js';

const postRouter=express.Router();

postRouter.post("/add", addPosts);
postRouter.get("/list/:uid", getPosts);

export default postRouter;