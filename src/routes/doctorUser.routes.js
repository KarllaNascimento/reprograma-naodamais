const controller = require("../controller/dodtorUserController");
const verifyToken = require("../helpers/check-token");
const router = require("express").Router();

//create new doctor
router.post("/doctor", verifyToken, controller.createDoctor);

//get all doctors 
router.get("/all", controller.getAllDoctor);

//get all healthPlan
router.get("/healthPlan", controller.onlyHealthPlan);

//get all socialPrice
router.get("/socialPrice", controller.onlySocialPrice);

//get all feminineGender
router.get("/femaleGender", controller.onlyWomen);

router.get("/maleGender", controller.onlyMen);

//update a doctor
router.put("/update", verifyToken, controller.updateDoctor);

//delete a doctor
router.delete("/:id", verifyToken, controller.deleteDoctor);

module.exports = router;
