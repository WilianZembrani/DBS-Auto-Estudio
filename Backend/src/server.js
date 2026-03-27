const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./modules/users/userRoutes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando");
});

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
