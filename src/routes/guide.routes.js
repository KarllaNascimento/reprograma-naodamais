const controller = require("../controller/guideController");
const verifyToken = require("../helpers/check-token");
const router = require("express").Router();

router.post("/create", verifyToken, controller.createGuide);

router.get("/allGuide", controller.allGuides);

router.get("/:id", controller.guideById);

router.patch("/:id", verifyToken, controller.updateGuide);

router.delete("/:id", controller.deleteGuide);

module.exports = router;