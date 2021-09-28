const express = require("express");
const router = express.Router();
const controller = require("../controller/main");

router.get("/zedhead/:id", controller.zedHead);

module.exports = router;