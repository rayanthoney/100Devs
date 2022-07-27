// DECLARE VARIABLES
const express = require("express");
const app = express();
const PORT = 8500;
const mongoose = require("mongoose");
const todotask = require("./models/todotask");
require("dotenv").config();

// ADD MODEL VARIABLE
// const TodoTask = require('./models/todotask')

// ADD MIDDLEWARE (TELLS SERVER WHERE TO LOOK FOR STUFF!)
// SET THE VIEW ENGINE TO EJS
app.set(`view engine', 'ejs`);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("We are connected to the db!");
});

// GET METHOD
app.get("/", async (req, res) => {
  try {
    TodoTask.find({}, (err, tasks) => {
      res.render("index.ejs", { todoTask: tasks });
    });
  } catch (err) {
    if (err)return res.status(500).send(err)
  }
});

// START SERVER
app.listen(PORT, () =>
  console.log(`Server is running on port! ${PORT} You Betta go and catch it!`)
);
