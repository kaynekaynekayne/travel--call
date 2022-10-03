import express from 'express';
import { addPosts } from '../controllers/postController.js';

const postRouter=express.Router();

postRouter.post("/add", addPosts);

export default postRouter;