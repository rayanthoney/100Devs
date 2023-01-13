// todo - declare Variables::
const express = require("express");
var cors = require("cors");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

// *Import function/routes
const connectDB = require("./config/database");
const homeRoutes = require('./routes/home')

require("dotenv").config({ path: "./config/.env" });

// todo - Connect to Database
connectDB();

// todo - Set Middleware
app.set("view engine", "ejs");
app.set(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// todo - Set Routes
app.use('/', homeRoutes );

// todo - Start Server
app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}, you better go catch it!`)
);
