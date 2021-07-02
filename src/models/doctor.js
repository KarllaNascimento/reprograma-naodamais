const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   adress: {
      type: String,
      required: true
   },
   active: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   state: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   healthPlan: {
      type: Boolean,
      required: true
   },
   userId: {
      type: mongoose.ObjectId
   },
   date: {
      type: Date
   }
});

const Doctor = mongoose.model("Company", DoctorSchema);

module.exports = Doctor;


// colocar um booleano para deixar aparecendo ou privado
// contar a problemática e solução

// quero aparexcer
// naõ quero aparexcerum if
// criar uma ropta dizendo que quer aparexcer
// caso não
