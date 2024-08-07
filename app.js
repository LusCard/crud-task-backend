import express from "express";
import { connectDatabase } from "./config/database.js";
import { router } from "./routes/routes.js";

const app = express();
const port = 4000;


app.use(express.json());
app.use(router)

connectDatabase();
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)})