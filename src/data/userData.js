import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

export async function findAllUsers() {
    const db = getDb();
    const users = await db.collection("users").find().toArray();
    console.log(users);
    return users;
}

export async function findUserById(id) {
    const db = getDb();
    const user = await db.collection("users").findOne({_id: new ObjectId(id)});
    console.log(user);
    return user;
}

