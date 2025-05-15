import { getUsers, getUserByID, registerUserService } from "../services/userService.js";

//export const getAllUsers = async(req, res) => {}

export async function getAllUsers(req, res){
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getUser(req, res) {
    try {
        const user = await getUserByID(req.params.id);
        if(!user){
            return res.status(404).json({message: "Usuario no encontrado"});
        }
        res.json(user);
    } catch (error) {
        console.error("Error fetching users: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function registerUserController (req, res){
    const {name, email, password} = req.body;
    if(!name || !email || !password ) {
        return res.status(400).json({message: "Faltan campos obligatorios (name, email, password)"});
    }

    try {
        const result = await registerUserService({name, email, password});
        console.log(result);
        res.status(201).json({message: "Usuario registrado exitosamente: ", userId: result.insertedId});

    } catch (error) {
        if(error.message === "El email ya esta registrado"){
            return res.status(409).json({message: error.message});
        }
        console.error("Error registrando usuario: ", error);
        res.status(500).json({message: "Error interno al registrar usuario"});
    }
}
