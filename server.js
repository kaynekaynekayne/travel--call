import express, {json, urlencoded} from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import contactRouter from './routes/contactRouter.js';
import postRouter from './routes/postRouter.js';

const __dirname = path.resolve();
const app=express();

mongoose.connect(process.env.DB_URL)
.then(()=>console.log('db connected'))
.catch((err)=>console.log(`db connection error ${err}`))

app.use(morgan('dev'));
app.use(cors({origin:true, credentials:true}));
app.use(json());
app.use(urlencoded({extended:false}));

app.use("/api/contact",contactRouter);
app.use("/api/post",postRouter);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}


const PORT=process.env.PORT || 4049;

app.listen(PORT, ()=>console.log(`server listening on ${PORT}`));