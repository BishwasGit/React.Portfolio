const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Your nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.elasticemail.com',
  port: 2525,
  secure: false,
  auth: {
    user: 'workmail.bishwas@gmail.com',
    pass: 'BDEB37AC29015E03F820239922973861E1CC',
  },
});

// Your email endpoint
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const emailMessage = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `;

    const mailOptions = {
      from: 'workmail.bishwas@gmail.com',
      to: 'contact@bishwas-shrestha.com.np',
      subject: 'Contact Form Submission',
      text: emailMessage,
    };

    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
