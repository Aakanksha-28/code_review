const { exec } = require("child_process");

// Function to fetch commit message and files
function getGitInfo() {
  // Get the latest commit message
  exec("git log -1 --pretty=%B", (err, commitMessage) => {
    if (err) {
      console.error("Error fetching commit message:", err);
      return;
    }
    console.log("Latest Commit Message:");
    console.log(commitMessage.trim());

    // Get the list of modified files in the latest commit
    exec("git diff-tree --no-commit-id --name-only -r HEAD", (err, files) => {
      if (err) {
        console.error("Error fetching changed files:", err);
        return;
      }
      console.log("Files Changed:");
      console.log(files.trim().split("\n"));
    });
  });
}

// Simulate AI logic
function runAIAgent() {
  console.log("AI Agent triggered...");
  getGitInfo();
  console.log("AI Agent process completed.");
}

runAIAgent();
