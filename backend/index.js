import express from "express"
import cors from "cors"
const app=express()
const corsOptions={
    origin:['http://localhost:5173']
}

app.use(cors(corsOptions))

app.get("/api",(req,res)=>{
    res.json({fruits:["apple","banana","watemelon"]})
})

app.listen(8080,()=>{
    console.log("server started on port 8080")
})