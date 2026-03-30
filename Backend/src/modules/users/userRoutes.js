const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.post("/login", userController.login);
router.get("/employees", userController.listEmployees);

router.get("/", userController.listUsers);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
