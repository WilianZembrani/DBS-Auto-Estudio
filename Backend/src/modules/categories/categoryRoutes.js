const express = require("express");
const router = express.Router();
const categoryController = require("./categoryController");

router.post("/", categoryController.createCategory);
router.get("/", categoryController.listCategories);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
