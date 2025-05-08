import "dotenv/config";

import { findAllUsers, findUserById } from "./src/data/userData.js";
import { connectToDatabase } from "./src/data/connection.js";

await connectToDatabase();
await findAllUsers();
console.log("Un solo usuario");

await findUserById("651a1d0d2cb6c18b2d90f1c7");
