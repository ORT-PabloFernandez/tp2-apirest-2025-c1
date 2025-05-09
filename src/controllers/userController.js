import { getUsers, getUserByID } from "../services/userService.js";

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