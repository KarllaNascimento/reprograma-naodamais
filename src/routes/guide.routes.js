const controller = require("../controller/guideController");
const verifyToken = require("../helpers/check-token");
const router = require("express").Router();

//create guide
router.post("/create", verifyToken, controller.createGuide);

//all guides
router.get("/allGuide", controller.allGuides);

//guide by id 
router.get("/:id", controller.guideById);

//update guide
router.patch("/:id", verifyToken, controller.updateGuide);

//delete guide
router.delete("/:id", controller.deleteGuide);

module.exports = router;