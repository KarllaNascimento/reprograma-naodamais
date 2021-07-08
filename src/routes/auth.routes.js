const controller = require("../controller/authController")
const router = require("express").Router();


//regiter an user
router.post("/register", controller.register)

//login an user

router.post("/login", controller.login)


module.exports = router;