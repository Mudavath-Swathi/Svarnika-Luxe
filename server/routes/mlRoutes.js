import express from "express";
import { predictDiamondPrice } from "../controllers/mlController.js";

const router = express.Router();

router.post("/diamond-price", predictDiamondPrice);

export default router;