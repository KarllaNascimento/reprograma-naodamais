const authRouter = require("./routes/auth.routes.js");
const userRouter = require("./routes/user.routes");
const doctorRouter = require("./routes/doctorUser.routes");
const guideRouter = require("./routes/guide.routes");
const db = require("./data/dbConfig");
const index = require("./routes/index");

const express = require("express");
const cors = require("cors");

const app = express();
db.connect();



app.use(cors());
app.use(express.json());

app.use("/", index);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/guide", guideRouter);

module.exports = app;