import * as express from "express"
import * as path from "path";
import * as cors from "cors";
const app = express()
const port = 3000;

app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());
app.get("/users",(req,res)=>{
    console.log("se recibio la info")
    res.json({
        users:[]
    })
})

app.get("/test", async (req, res) => {
    res.send("¡El servidor está funcionando correctamente en Vercel!");
});


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

  app.get("*", (req, res) => {
      // Usa path.resolve para obtener la ruta absoluta al archivo HTML
      const indexPath = path.resolve(__dirname, "../dist/index.html");
      res.sendFile(indexPath);
  });


app.listen(port,()=>{
    console.log("corriendo en ",port)
})