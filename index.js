import express from "express";
import app from "./app.js";
import 'dotenv/config';
// const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));