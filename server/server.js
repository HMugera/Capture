const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/mail', (req, res) => {
  let data = req.body;
  console.log(req.body);
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.PASS,
    },
  });

  let mailOptions = {
    from: data.email,
    to: process.env.MAIL_ADDRESS,
    subject: `Message from ${data.fullname}`,
    html: `
        <h3>Message</h3>
        <ul>
        <li>Name: ${data.fullname}</li >
        <li>Mobile: ${data.mobile}</li>
        <li>Email: ${data.email}</li>
     
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
                `,
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send('Success');
    }
  });

  smtpTransport.close();
});

const port = 3002;

app.listen(port, () => console.log(`Server started on port ${port}  `));
