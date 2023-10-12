import * as express from "express"
const app = express()
const port = 3002

app.use(express.static("dist"))

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

app.get("*",(req,res)=>{
    res.sendFile(__dirname + "/dist/index.html")
});


app.listen(port,()=>{
    console.log("corriendo en ",port)
})