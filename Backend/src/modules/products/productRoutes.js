const productController = require("./productController");
const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/upload");

router.get("/", productController.listProducts);
router.post("/", upload.array("imagens", 4), productController.createProduct);
router.put("/:id", upload.array("imagens", 4), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
