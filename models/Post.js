import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    email:{type:String, required:true, unique:true},
    addedPosts:Array,
    uid:{type:String, required:true, unique:true},
},{timestamps:true});

const Post=mongoose.model("Post", postSchema);
export default Post;