const Guide = require("../models/guide");
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
const user = User.findOne({ _id: userId}); //verificar se é user ou User

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

//all guides
router.get("/all", async (req, res) =>{

   try {
      
      const guides = await Guide.find()
      res.json({error: null, guides: guides});
   } catch (error) {
      
      return res.status(400).json({error});
   };

});

//guide by id 
router.get("/:id", async (req, res) =>{

   try {
      
      const allArticles = await Guide.findById(req.params.id);
      res.json({error: null, allArticles: allArticles});
   } catch (error) {
      
      return res.status(400).json({error});
   };

});

//update guide
router.patch("/:id", verifyToken, async (req, res) =>{
   const findGuide = await Guide.findById(req.params.id)
   if(findGuide == null) {
      return res.status(404).json({msg: "Guia não encontrado!"})
   } 

// verify user
const token = req.header("auth-token");
const userByToken = await getUserByToken(token);
const userId = userByToken._id.toString();
const user = await User.findOne({ _id: userId });

if (!user) {
   return res.status(400).json({ error: "O usuário não existe!" });
}

   if(req.body.articles != null){
      findGuide.articles = req.body.articles
      findGuide.guidance = req.body.guidance
      findGuide.approach = req.body.approach
   }

   const updateGuide = await findGuide.save()
   res.json({error: null, updateGuide})
})

//delete guide
router.delete("/:id", async (req,res)=>{
   const findGuide = await Guide.findById(req.params.id)
   if(findGuide == null) {
      return res.status(404).json({msg: "Guia não encontrado!"})
   } 
   
   try {
      await findGuide.remove()
      res.json({error: null, msg: "Guia deletado!"})
   } catch (error) {
      res.status(500).json({message: err.message})
   }
})

module.exports = router;