const productController = require("./productController");
const express = require("express");
const router = express.Router();

router.get("/", productController.listProducts);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
