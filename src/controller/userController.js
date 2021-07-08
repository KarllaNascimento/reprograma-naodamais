const User = require("../models/user");
const getUserByToken = require("../helpers/get-user-by-token");
const bcrypt = require("bcrypt");

//get all user specialist
const allSpecilist = async (req, res) =>{
   try {
      
      const allspecialist = await User.find({ doctor: true }, { password: 0 });
      res.json({error: null, allspecialist: allspecialist});
   } catch (error) {
      
      return res.status(400).json({error});
   };

};

const createUser = async (req,res)=>{

   const token = req.header("auth-token");
   const user = await getUserByToken(token);
   const userReqId = req.body.id;
   const password = req.body.password;
   const confirmPassword = req.body.confirmPassword;

   const userId = user._id.toString();

//check if user id is equal token user id
   if(userId != userReqId){
      res.status(401).json({ error: "Acesso negado!"});
   }

//create an user object
   const updateData = {
      name: req.body.name,
      email: req.body.email
   };

//check if passwords match
   if(password != confirmPassword){
      res.status(401).json({ error: "As senhas não conferem!"});
//change password
   } else if (password == confirmPassword && password != null) {

//creating password
   const salt = await bcrypt.genSalt(12);
   const passwordHash = await bcrypt.hash(password, salt);

//add password to data
   updateData.password = passwordHash;

}

try {

//returns update data
   
   const updateUser = await User.findOneAndUpdate({ _id: userId }, { $set:updateData }, {new: true});
   res.json({ error: null, msg: "Usuário atualizado com sucesso!", data: updateUser});

} catch (error) {

   res.status(400).json({ error })
   
};


};



module.exports = {
   allSpecilist,
   createUser
}