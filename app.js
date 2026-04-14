const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: '🎉 CI/CD Pipeline is working!',
        status: 'success',
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.get('/api/users', (req, res) => {
    res.json({
        users: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});