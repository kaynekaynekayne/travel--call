import express from 'express';
import { contactController } from '../controllers/contactController.js';

const contactRouter=express.Router();

contactRouter.get("/api", contactController);

export default contactRouter;