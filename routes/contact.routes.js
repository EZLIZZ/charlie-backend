import express from "express";
import { handleContactForm } from "../controller/contactController.js";

const router = express.Router();

router.post("/form", handleContactForm);

export default router;