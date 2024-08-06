import express from "express";
import { connectDatabase } from "./config/database.js"

const app = express();
const port = 4000;

app.get("/", (req, res)=>{
   res.send("hol")})

connectDatabase();
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)})