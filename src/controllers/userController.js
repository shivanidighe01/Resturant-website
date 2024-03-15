import bcrypt from 'bcrypt';
import User from '../models/users.model.js';

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.redirect('/login'); // Redirect to login page after successful signup
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { error: 'Internal server error' });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    // Here you can generate a JWT token or use session-based authentication
    res.redirect('/'); // Redirect to homepage after successful login
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
