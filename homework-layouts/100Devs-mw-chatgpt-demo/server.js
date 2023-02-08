const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.set('strictQuery', false)

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const serviceRequestSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  date: Date,
  time: String,
  notes: String
});

const ServiceRequest = mongoose.model("ServiceRequest", serviceRequestSchema);

app.post("/servicerequest", async (req, res) => {
  try {
    const serviceRequest = new ServiceRequest(req.body);
    await serviceRequest.save();
    res.status(201).send("Service request created");
  } catch (err) {
    res.status(500).send("Error creating service request:", err);
  }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
  

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
