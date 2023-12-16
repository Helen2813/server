import express from 'express';

const useRouter = express.Router();

useRouter.post('/login', (res, req) => {
    res.send('login');
});

useRouter.post('/register', (res, req) => {
    res.send('register');
});

export { useRouter };