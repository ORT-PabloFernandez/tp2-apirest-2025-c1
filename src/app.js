import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import cors from "cors";

const app = express();

// Middlewars
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);


// Ruta base
app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

export default app;
