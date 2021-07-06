const doctorRouter = require("./routes/doctorUser.routes");
const authRouter = require("./routes/auth.routes.js");
const userRouter = require("./routes/user.routes");
const guideRouter = require("./routes/guide.routes")
const express = require("express");
const cors = require("cors");
const db = require("../src/data/database");

db.connect();
const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/guide", guideRouter);

module.exports = app;