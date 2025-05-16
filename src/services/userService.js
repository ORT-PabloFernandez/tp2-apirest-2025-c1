// Contiene todos los servicios, tanto internos como externos
import { findAllUsers, findByCredentials, findUserById, registerUser } from "../data/userData.js";

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

export async function loginUserService({email, password}){
    const user = await findByCredentials(email, password);
    if(!user){
        throw new Error("Credenciales inválidas");        
    }
    // No devolver password
    const {password: _pw, ...userWithoutPassword} = user;
    return userWithoutPassword;
}