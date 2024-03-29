import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose
// .connect(process.env.MONGO)
.connect('mongodb+srv://coggan:coggan@mern-estate.l4wlxvu.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate')
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
});

const  app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!');
});