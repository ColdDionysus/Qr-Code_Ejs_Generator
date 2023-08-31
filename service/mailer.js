const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
const sendMessage = async (payload) => {
  const { email, attachments } = payload;
  const info = await transporter.sendMail({
    from: "gautampukar01@gmail.com", // sender address
    to: email.toString(), // list of receivers
    subject: "Qr from iQr", // Subject line
    // plain text body
    html: `<img src="cid:qrImg"></img>`,
    attachments, // html body
  });

  return info.messageId;
};

module.exports = { sendMessage };
