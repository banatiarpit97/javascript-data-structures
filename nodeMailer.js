var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arpitbanati97@gmail.com',
        pass: 'password'
    }
});

var mailOptions = {
    from: 'arpitbanati97@gmail.com',
    to: 'banatiarpit97@yahoo.co.in',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
