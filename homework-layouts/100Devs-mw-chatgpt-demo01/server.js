const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables from the .env file
dotenv.config();

// Connect to MongoDB database
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) console.log("Error connecting to MongoDB: ", err);
  else console.log("Successfully connected to MongoDB!");
});

// Define the schema for the service request form data
const serviceRequestsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    service: { type: String, required: true },
    notes: { type: String },
  });

// Create a model from the form data schema
const serviceRequests = mongoose.model("serviceRequests", serviceRequestsSchema);

// Initialize Express
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Use Express middleware to parse incoming JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Define a GET route for the admin page
app.get("/admin", async (req, res) => {
  try {
    // Get all service requests from the database, sorted by date and time
    const serviceRequest = await serviceRequest.find().sort({ date: 1, time: 1 });

    // Render the admin page and pass the service requests data to the view
    res.render("admin", { serviceRequests });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong. Please try again later.");
  }
});

// Define a POST route for handling service requests
app.post("/servicerequest", async (req, res) => {
  try {
    // Create a new serviceRequests object from the service request form data
    const serviceRequest = new serviceRequest({
      name: req.body.name,
      phoneNumber: req.body.phone,
      email: req.body.email,
      date: req.body.date,
      time: req.body.time,
      service: req.body.service,
      notes: req.body.notes,
    });

    // Save the service request to the database
    await serviceRequest.save();

    // Redirect the user back to the index page
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong. Please try again later.");
  }
});

// Define a GET route for the index page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Set the port for the server to listen on
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));