import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
connection.connect((error) => {
  if (error) {
    console.log("Erro ao conectar ao banco de dados");
  } else {
    console.log("Conectado com sucesso");
  }
});

module.exports = connection;
