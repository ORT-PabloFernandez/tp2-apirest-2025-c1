// Contiene todos los servicios, tanto internos como externos
import { findAllUsers, findUserById, registerUser } from "../data/userData.js";

export async function getUsers(){
    return await findAllUsers();
}

export async function getUserByID(id){
    return await findUserById(id);
}

export async function registerUserService({name, email, password}){
    try {
       return await registerUser ({name, email, password})
    } catch (error) {
        if(error.message === "El email ya esta registrado"){
            throw error;            
        }
        throw new Error("Error al registrar el usuario");        
    }
}