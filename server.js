const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mongoose.connection;
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
const {
  getAllChocolateData,
  getUserChocolateData,
  addUserChocolateData,
  deleteUserChocolateData,
  updateUserChocolateData,
} = require("./Curd");
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("connect to data base"));
app.get("/allChocolateData", getAllChocolateData);
app.get("/user", getUserChocolateData);
app.post("/user", addUserChocolateData);
app.delete("/user/:id", deleteUserChocolateData);
app.put("/user/:id", updateUserChocolateData);
app.listen(process.env.PORT, () =>
  console.log("server is running " + process.env.PORT)
);
