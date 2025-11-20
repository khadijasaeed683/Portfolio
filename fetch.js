const fs = require("fs");
const https = require("https");
const process = require("process");

// Only load .env locally (never in GitHub Actions)
if (!process.env.CI) require("dotenv").config();

// Read environment variables
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA || "true";

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your workflow or .env file is correct.",
};

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    console.error(ERR.noUserName);
    return; // Don't break deployment
  }

  if (!GITHUB_TOKEN) {
    console.error(
      "GitHub token is missing! Make sure REACT_APP_GITHUB_TOKEN is set in your workflow or .env."
    );
    return;
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}...`);

  const queryData = JSON.stringify({
    query: `
{
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
}
`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
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
      // Allow successful codes
      if (res.statusCode !== 200 && res.statusCode !== 201) {
        console.error("GitHub API Error:", res.statusCode);
        console.error("Response:", responseData);
        return; // Skip writing file but do NOT fail build
      }

      fs.writeFile("./public/profile.json", responseData, (err) => {
        if (err) return console.error(err);
        console.log("Saved file to public/profile.json");
      });
    });
  });

  req.on("error", (error) => {
    console.error("Request error:", error);
  });

  req.write(queryData);
  req.end();
}
