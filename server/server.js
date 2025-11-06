import express from "express"
import cors from "cors"
import connectDB from "./config/DB.js";
import crypto from "crypto"
import { configDotenv } from "dotenv";
import userRoutes from "./src/api/routes/authRoutes.js"
connectDB();
const app=express();

const PORT=  5000;

app.use(cors());
app.use(express.json());

//thats the auth Routes

app.use("/api/auth",userRoutes)



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})