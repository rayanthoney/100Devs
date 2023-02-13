const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables from the .env file
dotenv.config();

// Set the strictQuery property to false to allow queries on the mongoose model that may not return any data
mongoose.set('strictQuery', false)

// Create an express application
const app = express();

// Use the cors middleware to allow cross-origin requests
app.use(cors());

// Use the express.json() middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Use express.urlencoded middleware to handle URL encoded form data
app.use(express.urlencoded({ extended: false }));

// Serve the public directory as static files
app.use(express.static(path.join(__dirname, "public")));

// Get the MongoDB URI from the environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB using mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define the schema for the service request
const serviceRequestSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  date: Date,
  time: String,
  notes: String
});

// Create a mongoose model based on the service request schema
const ServiceRequest = mongoose.model("ServiceRequest", serviceRequestSchema);

// Create a POST endpoint to submit a service request
app.post("/servicerequest", async (req, res) => {
  try {
    // Create a new service request document from the incoming request body
    const serviceRequest = new ServiceRequest(req.body);

    // Save the service request to the database
    await serviceRequest.save();

    // Send a success status and message to the client
    res.status(201).send("Service request created");
  } catch (err) {
    // Send an error status and message to the client if there was an error saving the service request
    res.status(500).send("Error creating service request:", err);
  }
});

// Create a GET endpoint to serve the index page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
  
// Get the port from the environment variables or use port 3000
const port = process.env.PORT || 3000;

// Start the express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
