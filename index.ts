import express from "express"
const app = express()
const port = 3000



app.get("/users",(req,res)=>{
    res.json({
        users:[]
    })
})

app.get("/users/:userId/products",(req,res)=>{
    res.json({
        products:[]
    })
})


app.post("/users",(req,res)=>{
    res.status(201).json({
        message:"ok",
        id:1234
    })
})

app.use(express.static("dist"))

app.listen(port,()=>{
    console.log("corriendo en ",port)
})