import express from 'express';
import { useRouter } from './users/users.js';

const port = 8000;
const app = express();

app.get('/hello', (req, res) => {
    res.end();
});

app.use('./users', useRouter);

app.listen(port, () => {
    console.log(`Server is working on ${port}port`);
});