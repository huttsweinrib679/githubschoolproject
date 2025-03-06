const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const user = req.query.user;
  res.json({ message: `Hello ${user}!` });
});

app.listen(3000, () => console.log('Server started on port 3000'));
