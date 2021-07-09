const controller = require("../controller/userController");
const verifyToken = require("../helpers/check-token");
const router = require("express").Router();

router.get("/specialist", controller.allSpecilist);

router.put("/user", verifyToken, controller.updateUser);

module.exports = router