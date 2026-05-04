import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 20;

export async function findMovies({ page = DEFAULT_PAGE, limit = DEFAULT_LIMIT } = {}) {
    const db = getDb();
    const collection = db.collection("movies");

    const parsedPage = Math.max(Number(page) || DEFAULT_PAGE, 1);
    const parsedLimit = Math.max(Number(limit) || DEFAULT_LIMIT, 1);
    const skip = (parsedPage - 1) * parsedLimit;

    const [total, results] = await Promise.all([
        collection.countDocuments(),
        collection.find().skip(skip).limit(parsedLimit).toArray(),
    ]);

    return {
        results,
        total,
        page: parsedPage,
        limit: parsedLimit,
    };
}

export async function findMovieById(id) {
    const db = getDb();
    const movie = await db.collection("movies").findOne({ _id: new ObjectId(id) });
    return movie;
}
