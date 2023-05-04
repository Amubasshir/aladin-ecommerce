import bcrypt from 'bcrypt';
import nc from 'next-connect';
import User from '../../../../models/user';
import db from '../../../../utils/db';
import { sendEmail } from '../../../../utils/sendEmails';
import { createActivationToken } from '../../../../utils/token';
import validateEmail from '../../../../utils/validation';
const handler = nc();
handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'please fill all the fields' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email' });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'This email already exists' });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'Password must be at least 6 characters' });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: cryptedPassword });
    const addedUser = await newUser.save();
    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    });
    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
    sendEmail(email, url, '', 'Activate your account');
    await db.disconnectDb();
    return res.json({
      message: 'Register success! Please activate your email to start.',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
