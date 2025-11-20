const fs = require("fs");
const https = require("https");
const process = require("process");

// Load local .env only if not in GitHub Actions
if (!process.env.CI) require("dotenv").config();

// Read environment variables
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || ""; // Empty string if not set
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "khadijasaeed683"; // fallback to your username
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA || "true";

const ERR = {
  noUserName:
    "GitHub Username was found to be undefined. Please set relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check your GitHub token in workflow or .env file.",
};

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    console.error(ERR.noUserName);
    return; // Don't break deployment
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}...`);

  const queryData = JSON.stringify({
    query: `{
      user(login:"${GITHUB_USERNAME}") { 
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : "", // only if token exists
      "User-Agent": "Node",
      "Content-Type": "application/json",
    },
  };

  const req = https.request(options, (res) => {
    let responseData = "";

    console.log("GitHub API Status:", res.statusCode);

    res.on("data", (chunk) => {
      responseData += chunk;
    });

    res.on("end", () => {
      if (res.statusCode !== 200 && res.statusCode !== 201) {
        console.error("GitHub API Error:", res.statusCode);
        console.error("Response:", responseData);
        return; // Skip writing file but do NOT fail build
      }

      fs.writeFile("./public/profile.json", responseData, (err) => {
        if (err) return console.error(err);
        console.log("Saved file to public/profile.json ✅");
      });
    });
  });

  req.on("error", (error) => {
    console.error("Request error:", error);
  });

  req.write(queryData);
  req.end();
}
