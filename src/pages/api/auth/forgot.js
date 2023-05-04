import nc from 'next-connect';
import db from '../../../../utils/db';
import { sendEmail } from '../../../../utils/sendEmails';
const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { email } = req.body;
    res.send(email);
    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
    sendEmail(email, url, '', 'Activate your account');
    await db.disconnectDb();
    res.json({
      message: 'Register success! Please activate your email to start.',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
