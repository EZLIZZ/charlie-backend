import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js"
const app = express();
app.use(
  cors({
    origin: "https://portfolio-one-xi-kkjea6eq72.vercel.app/",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Backend Server - Ronak" });
});

app.use("/public", express.static("public"));

app.use('/contacts', contactRoutes);
export default app;
