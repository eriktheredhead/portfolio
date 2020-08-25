const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const mailgun = require('mailgun-js');
const DOMAIN = 'sandbox2f47e43b44d04cc6af526435410569dc.mailgun.org';

const auth = mailgun({
  api_key: '06fb8f0cb6029045b93ee2088fe86047-4d640632-1cc25e79',
  domain: DOMAIN,
});

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
  from: 'erikhough03@gmail.com',
  to: 'erikhough03@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
};
// auth.messages().send(data, function (err, body) {
//   console.log(body);
// });

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log('Error in Sending');
  } else {
    console.log('Message sent!!');
  }
});

// const auth = {
//   auth: {
//     api_key: 'key-06fb8f0cb6029045b93ee2088fe86047-4d640632-1cc25e79',
//     domain: 'sandbox2f47e43b44d04cc6af526435410569dc.mailgun.org',
//   },
// };

//

// const mailOptions = {
//   from: 'postmaster@sandbox2f47e43b44d04cc6af526435410569dc.mailgun.org',
//   to: 'erikhough03@gmail.com',
//   phone: '2816841810',
//   message: 'whats ups dawg',
// };

// transporter.sendMail(mailOptions, function (err, data) {
//   if (err) {
//     console.log('Error in Sending');
//   } else {
//     console.log('Message sent!!');
//   }
// });
