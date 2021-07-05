const Doctor = require("../models/doctorUser");
const User = require("../models/user");
const verifyToken = require("../helpers/check-token");
const getUserByToken = require("../helpers/get-user-by-token");

const router = require("express").Router();
const jwt = require("jsonwebtoken");

//create new doctor

router.post("/", verifyToken, async (req, res) =>{

   const name = req.body.name;
   const adress = req.body.adress;
   const feminineGender = req.body.feminineGender;
   const description = req.body.description;
   const socialPrice = req.body.socialPrice;
   const healthPlan = req.body.healthPlan;

//validations
   if(name == null || adress == null || socialPrice == null || healthPlan == null || description == null || feminineGender == null){
      return res.status(400).json({ error: "Preencha todos os campos obrigatórios!"});
   };

//check if there is a doctor
   const nameExists = await Doctor.findOne({ name : name});
   if(nameExists){
      return res.status(400).json({error: "A médica informada já está cadastrada"});
   };

   const createDoctor = new Doctor({
      name: name,
      adress: adress,
      feminineGender: feminineGender,
      description: description,
      socialPrice: socialPrice,
      healthPlan: healthPlan
   });

   try {
      const newDoctor = await createDoctor.save();
      return res.status(201).json(newDoctor);
   } catch (err) {
      return res.status(400).json({message: err.message});
   };
   
});

//get all doctors 
router.get("/all", async (req, res) =>{

   try {
      
      const doctors = await Doctor.find({ })
      res.json({error: null, doctors: doctors});
   } catch (error) {
      
      return res.status(400).json({error});
   };

});

//get all healthPlan
router.get("/healthPlan", async (req, res) =>{

   try {
      
      const healthPlan = await Doctor.find({ healthPlan: true });
      res.json({error: null, healthPlan: healthPlan});
   } catch (error) {
      
      return res.status(400).json({error});
   };

});

//get all socialPrice
router.get("/socialPrice", async (req, res) =>{

   try {
      
      const socialPrice = await Doctor.find({ socialPrice: true });
      res.json({error: null, socialPrice: socialPrice});
   } catch (error) {
      
      return res.status(400).json({error});
   };

});


//get all feminineGender
router.get("/gender", async (req, res) =>{

   try {
      
      const feminineGender = await Doctor.find({ feminineGender: true });
      res.json({error: null, feminineGender: feminineGender});
   } catch (error) {
      
      return res.status(400).json({error});
   };

});

//update the information
router.put("/update", verifyToken, async (req,res)=>{

})

//delete a doctor


module.exports = router;
