import bodyParser from "body-parser";
import cors from "cors"
import express from 'express'  
import connectDB from './db/connectDB.js';
import linkRouter from "./routes/linkRoute.js";
import userRouter from "./routes/userRoute.js";
import redirectRouter from "./routes/redirectRoute.js";


const app = express()
app.use(cors());
app.use(bodyParser.json());
connectDB();
app.use('/links', linkRouter);
app.use('/users', userRouter);
app.use('/redirect', redirectRouter);

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
