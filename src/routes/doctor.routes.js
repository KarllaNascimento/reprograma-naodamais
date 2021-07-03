const Doctor = require("../models/doctor");
const User = require("../models/user");
const verifyToken = require("../helpers/check-token");
const getUserByToken = require("../helpers/get-user-by-token");

const router = require("express").Router();
const jwt = require("jsonwebtoken");

//create new doctor

router.post("/", verifyToken, async (req, res) =>{

   const name = req.body.name;
   const adress = req.body.adress;
   const state = req.body.state;
   const description = req.body.description;
   const price = req.body.price;
   const healthPlan = req.body.healthPlan;
   // const 

//validations
   if(name == null || adress == null || state == null || price == null || healthPlan == null){
      return res.status(400).json({ error: "Preencha todos os campos obrigatórios!"})
   }

//check if there is a doctor
   const nameExists = await Doctor.findOne({ name : name});
   if(nameExists){
      return res.status(400).json({error: "A médica informada já está cadastrada"});
   }

   const createDoctor = new Doctor({
      name: name,
      adress: adress,
      state: state,
      description: description,
      price: price,
      healthPlan: healthPlan
   });

   try {
      const newDoctor = await createDoctor.save()
      return res.status(201).json(newDoctor)
   } catch (err) {
      return res.status(400).json({message: err.message})
   }
   
});

module.exports = router;
