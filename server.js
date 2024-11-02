import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Success', data });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
