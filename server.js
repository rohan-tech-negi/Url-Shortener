import express from "express";

const app = express()
const port = process.env.PORT || 4000;


app.get("/",(req,res)=>{
    res.json({message:"this is the home route"})
})

app.listen(port, ()=>{
    console.log("server is up on port 4000")
})