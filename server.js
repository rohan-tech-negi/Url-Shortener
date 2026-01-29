import express from "express";
import userRouter from "./routes/user.routes.js"
// import {a} from "./middlewares/auth.middleware.js"
// import {authenticationMiddleware} from "./middlewares/auth.middleware.js"
import authenticationMiddleware from "./middlewares/auth.middleware.js";
const app = express()
const port = process.env.PORT || 4000;


app.use(express.json())
app.use(authenticationMiddleware)
app.get("/",(req,res)=>{
    res.json({message:"this is the home route"})
})

app.use("/user", userRouter)

app.listen(port, ()=>{
    console.log("server is up on port 4000")
})