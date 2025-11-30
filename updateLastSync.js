// updateLastSync.js
// Updates the lastUpdated value in src/data/portfolio.ts to the latest git commit date

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get latest commit date (ISO format)
const gitDateRaw = execSync('git log -1 --format=%ci').toString().trim();
const dateObj = new Date(gitDateRaw);
const formattedDate = dateObj.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const filePath = path.join(__dirname, 'src', 'data', 'portfolio.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

// Replace lastUpdated value
fileContent = fileContent.replace(
  /export const lastUpdated = '.*?';/,
  `export const lastUpdated = '${formattedDate}';`
);

fs.writeFileSync(filePath, fileContent);
console.log(`Updated last sync date to: ${formattedDate}`);