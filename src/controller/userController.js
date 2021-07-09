const User = require("../models/user");
const getUserByToken = require("../helpers/get-user-by-token");
const bcrypt = require("bcrypt");


const allSpecilist = async (req, res) => {
   try {

      const allspecialist = await User.find({
         doctor: true
      }, {
         password: 0
      });
      res.json({
         error: null,
         allspecialist: allspecialist
      });
   } catch (error) {

      return res.status(400).json({
         error
      });
   };

};

const updateUser = async (req, res) => {

   const token = req.header("auth-token");
   const user = await getUserByToken(token);
   const userReqId = req.body.id;
   const password = req.body.password;
   const confirmPassword = req.body.confirmPassword;

   const userId = user._id.toString();


   if (userId != userReqId) {
      res.status(401).json({
         error: "Acesso negado!"
      });
   };


   const updateData = {
      name: req.body.name,
      email: req.body.email
   };


   if (password != confirmPassword) {
      res.status(401).json({
         error: "As senhas não conferem!"
      });

   } else if (password == confirmPassword && password != null) {


      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      updateData.password = passwordHash;
   };

   try {
      const updateUser = await User.findOneAndUpdate({
         _id: userId
      }, {
         $set: updateData
      }, {
         new: true
      });
      res.json({
         error: null,
         msg: "Usuário atualizado com sucesso!",
         data: updateUser
      });

   } catch (error) {

      res.status(400).json({
         error
      });

   };

};



module.exports = {
   allSpecilist,
   updateUser
}