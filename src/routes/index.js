const router = require("express").Router();

router.get("/", (req, res)=>{
   res.status(200).json({
      título: "teCuida Api - Projeto final da {reprograma}",
      version: "1.0.0",
      mensagem: "Seja bem vinde! 🤖"
   });
});

module.exports = router