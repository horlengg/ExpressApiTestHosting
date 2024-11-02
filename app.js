import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    return res.json({
        message : "Message from express application"
    })
})

app.listen(5000,()=>{
    console.log("Server is running...");
    
})