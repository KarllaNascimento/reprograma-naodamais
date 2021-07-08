const controller = require("../controller/userController");
const verifyToken = require("../helpers/check-token");
const router = require("express").Router();


// // get an user
// router.get("/:id", verifyToken, async (req, res) => {

//    const id = req.params.id;

// //verify user
//    try {
//       const user = await User.findOne({ _id: id }, { password: 0 });

//       res.json({error: null, user});

//    } catch (error){
//       return res.status(400).json({error: "O usuário não existe!"});
//    };
// });

//get all user specialist
router.get("/specialist", controller.allSpecilist);

//update an user
router.put("/user", verifyToken, controller.createUser);



module.exports = router