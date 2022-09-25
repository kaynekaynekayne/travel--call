import express from 'express';
import { getInfo } from '../controllers/getInfo.js';


const router=express.Router();

router.get("/api", getInfo);

export default router;