const express = require("express");
const router = express.Router();
const officeController = require("./officeController");

router.get("/", officeController.listOffices);
router.post("/", officeController.createOffice);
router.put("/:id", officeController.updateOffice);
router.delete("/:id", officeController.deleteOffice);

module.exports = router;
