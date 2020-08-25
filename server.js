const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const log = console.log;

const PORT = 3000;

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/email', (req, res) => {
  //TODO:
  // send email here
  log('Data: ', req.body);
  res.json({ message: 'Message received!!' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => log('Server started on PORT: ', 3000));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
