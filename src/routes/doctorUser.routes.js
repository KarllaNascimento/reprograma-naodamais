const Doctor = require("../models/doctorUser");
const User = require("../models/user");
const verifyToken = require("../helpers/check-token");
const getUserByToken = require("../helpers/get-user-by-token");

const router = require("express").Router();

//create new doctor

router.post("/", verifyToken, async (req, res) =>{

   const name = req.body.name;
   const adress = req.body.adress;
   const socialPrice = req.body.socialPrice;
   const healthPlan = req.body.healthPlan;
   const description = req.body.description;
   const feminineGender = req.body.feminineGender;

//verify user
const token = req.header("auth-token");
const userByToken = await getUserByToken(token);
const userId = userByToken._id.toString();
const user = user.findOne({ _id: userId}); //verificar se é user ou User

try {
   const user = await user.findOne({ _id: userId});
} catch (error) {
   return res.status(400).json({ error: "É preciso realizar o login para cadastrar novas informações."});
}

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

//update a doctor
router.put("/update", verifyToken, async (req,res)=>{

//req body
const name = req.body.name;
const adress = req.body.adress;
const socialPrice = req.body.socialPrice;
const healthPlan = req.body.healthPlan;
const description = req.body.description;
const feminineGender = req.body.feminineGender;
const doctorId = req.body.id;
const doctorUserId =  req.body.user_id;

//validatiosn
if(name == "null" || adress == null || socialPrice == null || healthPlan == null || description == null || feminineGender == null || doctorId == null){
   return res.status(400).json({ error: "Preencha todos os campos obrigatórios!"});
};

// verify user
const token = req.header("auth-token");
const userByToken = await getUserByToken(token);
const userId = userByToken._id.toString();
const user = await User.findOne({ _id: userId });

if (!user) {
   return res.status(400).json({ error: "O usuário não existe!" });
}

//build doctor object
const doctor = ({
   id: doctorId,
   name: name,
   adress: adress,
   feminineGender: feminineGender,
   description: description,
   socialPrice: socialPrice,
   healthPlan: healthPlan,
   userId: doctorUserId
});


try {

//returns update data
   const updateDoctor = await Doctor.findOneAndUpdate({ _id: doctorId, userId: userId }, { $set: doctor }, {new: true})
   res.json({error: null, msg: "Doutor/a atualizado com sucsso!", data: updateDoctor})

} catch (err) {
   res.status(400).json({error: "Atualização não realizada"});
};

})

//delete a doctor
router.delete("/:id", verifyToken, async (req,res)=>{

   const token = req.header("auth-token");
   const user = await getUserByToken(token);
   const doctorId = req.body.id;
   const userId = user._id.toString();

   try {

      await Doctor.deleteOne({ _id: doctorId, userId: userId});
      res.json({ error: null, msg: "Médico/a deletado com sucesso!"});
      
   } catch (error) {
      
      res.status(400).json({error: "Você não tem permissão para realizar essa ação."});

   };


});

module.exports = router;
