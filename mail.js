require('dotenv').config();

const nodemailer = require('nodemailer');

// Step 1: transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendMail = (name, email, subject, text, cb) => {
  // Step 2:
  let mailOptions = {
    from: {
      name,
      email,
    },
    to: 'houghworksweb@gmail.com',
    subject,
    text,
  };

  // Step 3:
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
