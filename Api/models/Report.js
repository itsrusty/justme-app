import { Sequelize } from "sequelize";
import sequelize from "../db/conex.js";

const Report = sequelize.define("report", {
  report_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  report_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Sincroniza el modelo con la base de datos
try {
  await sequelize.sync();
  console.log("Modelo de Usuario sincronizado correctamente.".blue);
} catch (error) {
  console.error("No se pudo sincronizar el modelo de Usuario:", error);
}

export { Report }