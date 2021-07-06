const Specialist = require("../models/guide");
const User = require("../models/user");
const verifyToken = require("../helpers/check-token");
const getUserByToken = require("../helpers/get-user-by-token");

const router = require("express").Router();

router.post("/", verifyToken, async (req, res) =>{

   const articles = req.body.articles;
   const guidance = req.body.guidance;
   const approach = req.body.approach;

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
   if(articles == null || guidance == null || approach == null){
      return res.status(400).json({ error: "Preencha todos os campos obrigatórios!"});
   };

   const createGuide = new Guide({
      articles: articles,
      guidance: guidance,
      approach: approach
   });

   try {
      const newGuide = await createGuide.save();
      return res.status(201).json(newGuide);
   } catch (err) {
      return res.status(400).json({message: err.message});
   };
   
});


module.exports = router;