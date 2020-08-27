require('dotenv').config();
const express = require('express');
const path = require('path');
const sendMail = require('./mail.js');
const app = express();
const log = console.log;

const PORT = 3000;

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//name, email, phone, message
app.post('/email', (req, res) => {
  const { from, email, subject, text } = req.body;
  log('Data: ', req.body);

  sendMail(from, email, subject, text, (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Internal Error' });
    } else {
      res.json({ message: 'Email sent!!!' });
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => log('Server started on PORT: ', 3000));
