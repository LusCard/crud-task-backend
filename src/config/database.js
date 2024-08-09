import mysql from "mysql2/promise.js";
import "dotenv/config";

export const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const connectDB = async () => {
  try {
    return connection;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
