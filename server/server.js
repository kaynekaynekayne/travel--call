import express, {json, urlencoded} from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import morgan from 'morgan';
import cors from 'cors';

const app=express();

mongoose.connect(process.env.DB_URL)
.then(()=>console.log('db connected'))
.catch((err)=>console.log(`db connection error ${err}`))

app.use(morgan('dev'));
app.use(cors({origin:true, credentials:true}));
app.use(json());
app.use(urlencoded({extended:false}));

const PORT=4049;

app.listen(PORT, ()=>console.log(`server listening on ${PORT}`));