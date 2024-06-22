import app from "./app.js";
import { PORT } from "./config.js";
import { sequelize } from "./database/database.js";

// import './models/project.js';
// import './models/task.js'

//Se hace con constructor para user programacion asincrona
async function main() {
  try {
    await sequelize.sync({force: false}) //El force: true es para que se borren las tablas y se creen de nuevo
    app.listen(PORT, () => {
      console.log("El servidor esta corriendo en el puerto:", PORT);
    });
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
}

//Se ejecuta la funcion main
main();

