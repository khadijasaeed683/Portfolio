const fs = require("fs");
const https = require("https");
const process = require("process");

// Load local .env only if NOT running on GitHub Actions
if (!process.env.CI) require("dotenv").config();

// Read environment variables
const GITHUB_TOKEN = process.env.GH_PAGES_TOKEN || ""; // FIX: use your real secret name
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "khadijasaeed683"; 
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA || "true";

const ERR = {
  noUserName:
    "GitHub Username is undefined. Please set GITHUB_USERNAME in secrets or .env",
};

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    console.error(ERR.noUserName);
    return;
  }

  console.log(`Fetching GitHub profile data for ${GITHUB_USERNAME}...`);

  const queryData = JSON.stringify({
    query: `{
      user(login:"${GITHUB_USERNAME}") { 
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
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
      Authorization: `Bearer ${GITHUB_TOKEN}`, // FIXED
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
      if (res.statusCode !== 200) {
        console.error("❌ GitHub API Error:", res.statusCode);
        console.error("Response:", responseData);
        return;
      }

      fs.writeFile("./public/profile.json", responseData, (err) => {
        if (err) return console.error(err);
        console.log("✅ Saved file: public/profile.json");
      });
    });
  });

  req.on("error", (error) => {
    console.error("Request error:", error);
  });

  req.write(queryData);
  req.end();
}
