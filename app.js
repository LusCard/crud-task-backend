import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/database.js";
import { createTable } from "./src/controllers/controllers.js";
import { router } from "./src/routes/routes.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

connectDB();
createTable();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
