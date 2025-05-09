// Contiene todos los servicios, tanto internos como externos
import { findAllUsers, findUserById } from "../data/userData.js";

export async function getUsers(){
    return await findAllUsers();
}

export async function getUserByID(id){
    return await findUserById(id);
}