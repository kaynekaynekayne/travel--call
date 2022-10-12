import express from 'express';
import { addPosts, beforeAddFirstPost, getPosts, removePost} from '../controllers/postController.js';

const postRouter=express.Router();

postRouter.post("/add", addPosts);
postRouter.get("/list/:email", getPosts);
postRouter.put("/delete", removePost);
postRouter.post("/user",beforeAddFirstPost);

export default postRouter;