import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Main endpoint
app.get("/", (req, res) => {
  const response = {
    email: "oyerohabib@yahoo.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/oyerohabib/hng-12-BE-stage-0",
  };

  res.status(200).json(response);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
