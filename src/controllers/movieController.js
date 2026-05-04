import { getAllMovies, getMovieByID } from "../services/movieService.js";

export async function getAllMoviesController(req, res) {
    const { page = 1, limit = 20 } = req.query;

    try {
        const data = await getAllMovies({ page, limit });
        res.json(data.results);
    } catch (error) {
        console.error("Error fetching movies: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getMovieController(req, res) {
    const { id } = req.params;

    try {
        const movie = await getMovieByID(id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.json(movie);
    } catch (error) {
        console.error("Error fetching movie: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
