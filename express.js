const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Mock user data (replace with database in real application)
const users = [
    { username: 'admin', password: 'password' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
