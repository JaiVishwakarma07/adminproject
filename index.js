import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"

const app = express();
mongoose.set('strictQuery', true)
dotenv.config()

const corsOptions = {
    origin: 'http://localhost:5500',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected")
    } catch (err) {
        console.log(err)
    }
}

app.listen(8800, () => {
    connect()
    console.log("api working")
})