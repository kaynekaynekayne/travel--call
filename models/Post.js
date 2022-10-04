import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    email:{type:String, required:true, unique:true},
    addedPosts:Array,
},{timestamps:true});

const Post=mongoose.model("Post", postSchema);
export default Post;