// Import Express
const express = require('express');
const app = express();
const port = 3000;

// Simulate outage state
let isOutage = false;

// Endpoint to check outage status
app.get('/outage', (req, res) => {
  res.json({ outage: isOutage });
});

// Endpoint to toggle outage state for testing (optional for dev purposes)
app.post('/toggle-outage', (req, res) => {
  isOutage = !isOutage;
  res.json({ message: `Outage state set to ${isOutage}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
