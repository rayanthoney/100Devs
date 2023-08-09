import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// New route to handle requests to the jservice API

// middleware

app.use("/api", async (req, res) => {
  console.log(`http://jservice.io/api${req.url}`);
  try {
    // Forward the request to the jservice API
    const apiResponse = await fetch(`http://jservice.io/api${req.url}`);
    const data = await apiResponse.json();
    res.send;
  } catch (error) {
    res.status(500).send("Error fetching data from the jservice API,");
  }
});

const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server is rrunning on http://localhost:${PORT}`);
});
