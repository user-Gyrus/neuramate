import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Healthcheck route
app.get("/api/test", (req, res) => {
  res.json({ message: "Healthcheck: Backend is running!" });
});

// Video summarizer route
app.post("/api/video", (req, res) => {
  res.json({
    message: "Video upload endpoint hit!",
    data: req.body,
  });
});

// Gaming arena route
app.post("/api/gaming", (req, res) => {
  res.json({
    message: "Gaming arena endpoint hit!",
    data: req.body,
  });
});

// Bot chat route
app.post("/api/bot", (req, res) => {
  res.json({
    message: "Chat bot endpoint hit!",
    data: req.body,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
