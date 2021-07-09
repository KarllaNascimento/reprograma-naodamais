const controller = require("../controller/dodtorUserController");
const verifyToken = require("../helpers/check-token");
const router = require("express").Router();

router.post("/doctor", verifyToken, controller.createDoctor);

router.get("/all", controller.getAllDoctor);

router.get("/healthPlan", controller.onlyHealthPlan);

router.get("/socialPrice", controller.onlySocialPrice);

router.get("/femaleGender", controller.onlyWomen);

router.get("/maleGender", controller.onlyMen);

router.put("/update", verifyToken, controller.updateDoctor);

router.delete("/:id", verifyToken, controller.deleteDoctor);

module.exports = router;