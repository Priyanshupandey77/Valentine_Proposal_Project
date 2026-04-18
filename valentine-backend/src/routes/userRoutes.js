import express from "express";
import {
  generateProposal,
  getUser,
  acceptProposal,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/generate", generateProposal);
router.put("/accept/:userId", acceptProposal);
router.get("/:userId", getUser);

export default router;
