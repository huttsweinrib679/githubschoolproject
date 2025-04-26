const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Example route to handle POST requests
app.post('/data', (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Missing name' });
  }
  
  // Simulate handling of the data payload
  setTimeout(() => {
    console.log(`Data received: ${name}`);
    res.status(200).json({ message: `Data received: ${name}` });
  }, 5000);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
