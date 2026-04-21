const productController = require("./productController");
const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/upload");

router.get("/", productController.listProducts);
router.post("/", upload.array("imagens", 4), productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
