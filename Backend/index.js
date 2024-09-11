import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from'cors';


import bookRoute from './route/book.route.js';
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5005;
const URI = process.env.MONGODB_URI;

//connect to mongoDB
try {
     mongoose.connect(URI);
    console.log("Connected to the Database")
} catch (error) {
    console.log("Error:", error);
}

//defining routes
app.use("/books",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})