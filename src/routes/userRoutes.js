import express from "express";
import { getAllUsers, getUser, registerUserController } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/register", registerUserController);

export default router;