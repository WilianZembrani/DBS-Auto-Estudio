const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./modules/users/userRoutes");
const officeRoutes = require("./modules/office/officeRoutes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando");
});

app.use("/api/users", userRoutes);
app.use("/api/offices", officeRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
