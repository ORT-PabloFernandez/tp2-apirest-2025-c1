import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";

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

export async function registerUser({name, email, password}){
    const db = getDb();
    // Verificar si el usuario ya existe
    const existingUser = await db.collection("users").findOne({email});
    if(existingUser) {
        throw new Error("El email ya esta registrado");        
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = {
        name,
        email, 
        password: hashedPassword
    };

    const result = await db.collection("users").insertOne(newUser);

    return result;
}

