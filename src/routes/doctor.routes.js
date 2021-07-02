const Doctor = require("../models/doctor");
const User = require("../models/user");
const verifyToken = require("../helpers/check-token");
const getUserByToken = require("../helpers/get-user-by-token");

const router = require("express").Router();
const jwt = require("jsonwebtoken");

//get doctor

router.get("/", verifyToken, (req, res) =>{
   res.status(200).json({msg: "tudo certo"});
});

module.exports = router
