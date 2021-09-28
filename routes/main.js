const express = require("express");
const router = express.Router();
const controller = require("../controller/main");

router.get("/creemee/:id", controller.creemee);

module.exports = router;