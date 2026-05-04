import { findMovies, findMovieById } from "../data/movieData.js";

export async function getAllMovies({ page, limit }) {
    return await findMovies({ page, limit });
}

export async function getMovieByID(id) {
    return await findMovieById(id);
}
