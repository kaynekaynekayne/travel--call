import express from 'express';
import { addPosts, getPosts, removePost} from '../controllers/postController.js';

const postRouter=express.Router();

postRouter.post("/add", addPosts);
postRouter.get("/list/:email", getPosts);
postRouter.put("/delete", removePost);

export default postRouter;