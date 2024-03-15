import { Router } from 'express';
const router = Router();
import { signup, login } from '../controllers/userController.js';

router.get('/signup', async (req, res) => {
    try {
        res.render('UserSignup');
    } catch (error) {
        console.error('Error rendering UserSignup.ejs:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/signup', async (req, res) => {
    try {
        await signup(req, res);
    } catch (error) {
        console.error('Error in signup route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('UserLogin');
    } catch (error) {
        console.error('Error rendering UserLogin.ejs:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/login', async (req, res) => {
    try {
        await login(req, res);
    } catch (error) {
        console.error('Error in login route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
