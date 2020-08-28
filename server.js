require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const log = console.log;

const PORT = process.env.PORT || 3000;

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Render website
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//name, email, phone, message
app.post('/email', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p> 
  `;

  // Step 1: transporter
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: '"Contact Form Query" <houghworksweb@gmail.com>',
    to: 'houghworksweb@gmail.com, erikhough03@gmail.com',
    subject: 'Node Contact Request',
    text: 'New Contact Message',
    html: output, // html body
  };

  // Step 3:
  transporter.sendMail(mailOptions, (error, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
});

app.listen(PORT, () => log(`Server started on port ${PORT}`));
