const express = require("express");

const router = express.Router();

// NBA API base URL
const NBA_BASE_URL = "https://stats.nba.com";

// Headers for NBA API requests
const NBA_HEADERS = {
  Referer: "https://www.nba.com/",
};

// NBA Player Index proxy
router.get("/stats/playerindex", async (req, res) => {
  try {
    const queryParams = req.query;
    const baseUrl = `${NBA_BASE_URL}/stats/playerindex`;

    // Build query string
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    console.log(`Requesting: ${url}`);

    const response = await fetch(url, {
      headers: NBA_HEADERS,
      timeout: 10000,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("NBA API Error:", {
      message: error.message,
      status: error.status,
    });

    res.status(500).json({
      error: error.message,
      status: error.status,
    });
  }
});

// NBA Team Index proxy
router.get("/stats/teamindex", async (req, res) => {
  try {
    const queryParams = req.query;
    const baseUrl = `${NBA_BASE_URL}/stats/teamindex`;

    // Build query string
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    console.log(`Requesting: ${url}`);

    const response = await fetch(url, {
      headers: NBA_HEADERS,
      timeout: 10000,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("NBA API Error:", {
      message: error.message,
      status: error.status,
    });

    res.status(500).json({
      error: error.message,
      status: error.status,
    });
  }
});

// NBA League Dash Player Stats proxy
router.get("/stats/leaguedashplayerstats", async (req, res) => {
  try {
    const queryParams = req.query;
    const baseUrl = `${NBA_BASE_URL}/stats/leaguedashplayerstats`;

    // Build query string
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    console.log(`Requesting: ${url}`);

    const response = await fetch(url, {
      headers: NBA_HEADERS,
      timeout: 10000,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("NBA API Error:", {
      message: error.message,
      status: error.status,
    });

    res.status(500).json({
      error: error.message,
      status: error.status,
    });
  }
});

// NBA League Dash Team Stats proxy
router.get("/stats/leaguedashteamstats", async (req, res) => {
  try {
    const queryParams = req.query;
    const baseUrl = `${NBA_BASE_URL}/stats/leaguedashteamstats`;

    // Build query string
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    console.log(`Requesting: ${url}`);

    const response = await fetch(url, {
      headers: NBA_HEADERS,
      timeout: 10000,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("NBA API Error:", {
      message: error.message,
      status: error.status,
    });

    res.status(500).json({
      error: error.message,
      status: error.status,
    });
  }
});

module.exports = router;
