var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'unyunyusaja@gmail.com',
        pass: 'coding11'
    }
});

var mailOptions = {
    from: 'unyunyusaja@gmail.com',
    to: m.gusadib@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});