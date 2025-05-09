import "dotenv/config";
import app from "./src/app.js";
import { connectToDatabase } from "./src/data/connection.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectToDatabase();
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ No se pudo iniciar el servidor: ", error.message);
        process.exit(1);
    }
};

startServer();

//TODO Implementar la API para crear usuarios
//TODO Implementar la API para CRUD (Create, Read, Update, Delete) para Inventors
//TODO Empezar con el proyecto con la entidad mas simple