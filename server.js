// Import Express
const express = require('express');
const app = express();
const port = 3000;

// Simulate outage state
let isOutage = false;
let pollingInterval = 0;
let Max = 0;

app.use(express.json());

// Endpoint to check outage status
app.get('/outage', (req, res) => {
  res.json({ outage: isOutage, pollingInterval: pollingInterval, Max: Max });
});

// Endpoint to toggle outage state for testing (optional for dev purposes)
app.post('/toggle-outage', (req, res) => {
  console.log(req.body);
  isOutage = !isOutage;
  pollingInterval = req.body?.pollingInterval;
  Max = req.body?.Max;
  res.json({ message: `Outage state set to ${isOutage}, ${pollingInterval}, ${Max}` });
});

app.post('/update-outage', (req, res) => {
  console.log(req.body);
  pollingInterval = req.body?.pollingInterval;
  Max = req.body?.Max;
  res.json({ message: `Outage state set to ${isOutage}, ${pollingInterval}, ${Max}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
