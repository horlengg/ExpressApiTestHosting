import express from 'express';

const app = express();

const products = [
    {
        id : 1,
        name : "Product 1",
        description : "This is product 1",
        price : 100
    },
    {
        id : 2,
        name : "Product 2",
        description : "This is product 2",
        price : 200
    }
]

app.get("/",(req,res)=>{
    return res.json({
        message : "Message from express application"
    })
})
app.get("/product",(req,res)=>{
    return res.status(200).json({
        message : "fetched product sucessfully",
        data : products
    })
})

app.listen(5000,()=>{
    console.log("Server is running...");
    
})