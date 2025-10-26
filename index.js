const express = require("express");
const nbaRoutes = require("./routes/nba");

const app = express();
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// NBA API routes
app.use(nbaRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
  console.log(`Health check: http://${HOST}:${PORT}/health`);
  console.log(
    `NBA Player Index proxy: http://${HOST}:${PORT}/stats/playerindex`
  );
});
