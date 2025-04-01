const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Example route to get user data
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];

  res.status(200).json(users);
});

// Example route to create user
app.post('/users', (req, res) => {
  const data = req.body;

  if (!data.name || !data.email || !data.password) {
    return res.status(400).send('Missing required fields: name, email, password');
  }

  const user = { id: users.length + 1, name: data.name, email: data.email, password: 'password' };

  users.push(user);
  res.status(201).json({ message: 'User created successfully', user });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
