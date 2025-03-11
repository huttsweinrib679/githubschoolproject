import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Leanne', email: 'leanne@example.com' },
        { id: 2, name: 'Ervin', email: 'ervin@example.com' },
        { id: 3, name: 'Anita', email: 'anita@example.com' }
    ];
    res.json(users);
});
app.post('/users', (req, res) => {
    const user = { id: 4, name: req.body.name, email: req.body.email };
    users.push(user);
    res.json(user);
});
app.put('/users/:id', (req, res) => {
    const user = { id: parseInt(req.params.id), name: req.body.name, email: req.body.email };
    users = users.map((u) => (u.id === user.id ? user : u));
    res.json(user);
});
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
    }
    res.json({ message: 'User deleted' });
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
});