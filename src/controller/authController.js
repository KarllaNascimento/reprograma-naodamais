const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
   const confirmPassword = req.body.confirmPassword;


   if (name == null || email == null || password == null || confirmPassword == null) {
      return res.status(400).json({
         error: "Por favor, preencha todos os campos!"
      });
   };


   if (password != confirmPassword) {
      return res.status(400).json({
         error: "As senhas não correpondem. Tente novamente."
      });
   };


   const emailExists = await User.findOne({
      email: email
   });

   if (emailExists) {
      return res.status(400).json({
         error: "O e-mail informado já está cadastrado!"
      });
   };


   const salt = await bcrypt.genSalt(12);
   const passwordHash = await bcrypt.hash(password, salt);

   const user = new User({
      name: name,
      email: email,
      password: passwordHash
   });

   try {

      const newUser = await user.save();
      const token = jwt.sign({
            name: newUser.name,
            id: newUser._id
         },
         "nossosecret"
      );


      res.json({
         error: null,
         msg: "Você realizou o cadastro com sucesso!",
         token: token,
         userId: newUser._id
      });

   } catch (error) {
      res.status(400).json({
         error
      });
   };

};

const login = async (req, res) => {

   const email = req.body.email;
   const password = req.body.password;


   const user = await User.findOne({
      email: email
   });

   if (!user) {
      return res.status(400).json({
         error: "Não existe usuário cadastrado com o e-mail informado!"
      });
   };


   const checkPassword = await bcrypt.compare(password, user.password);

   if (!checkPassword) {
      return res.status(400).json({
         error: "Senha inválida!"
      });
   };


   const token = jwt.sign({
         name: user.name,
         id: user._id
      },
      "nossosecret"
   );


   res.json({
      error: null,
      msg: "Você está autenticado!",
      token: token,
      userId: user._id
   });

};

module.exports = {
   register,
   login
}