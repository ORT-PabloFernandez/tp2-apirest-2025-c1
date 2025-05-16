import express from "express";
import { getAllUsers, getUser, loginUserController, registerUserController } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAllUsers);
router.get("/:id", getUser);
router.post("/register", registerUserController);
router.post("/login", loginUserController);

export default router;