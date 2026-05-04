import express from "express";
import { getAllMoviesController, getMovieController } from "../controllers/movieController.js";

const router = express.Router();

router.get("/", getAllMoviesController);
router.get("/:id", getMovieController);

export default router;
