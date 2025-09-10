const fs = require('fs');

const out = { tests: {}, lint: {}, score: 0 };

try {
  const jest = JSON.parse(fs.readFileSync('artifacts/jest-results.json', 'utf-8'));
  const total = jest.numTotalTests || 0;
  const passed = jest.numPassedTests || 0;
  out.tests = { total, passed, passPct: total ? (passed / total) * 100 : 0 };
} catch (e) {
  out.tests = { error: "No jest results" };
}

try {
  const eslint = JSON.parse(fs.readFileSync('artifacts/eslint.json', 'utf-8'));
  const problems = eslint.reduce((sum, f) => sum + f.errorCount + f.warningCount, 0);
  out.lint = { problems };
} catch (e) {
  out.lint = { error: "No eslint results" };
}

out.score = out.tests.passPct || 0;

fs.writeFileSync('artifacts/scorecard.json', JSON.stringify(out, null, 2));
console.log("Wrote artifacts/scorecard.json");
