const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {
  sendEmail(message) {
    const messageWithSender = {
      ...message,
      bcc: [{ email: 'xaver.fleer+bern-orient@gmail.com' }],
      from: 'webformular@bern-orient.ch',
    }
    return sgMail.send(messageWithSender)
  },
}
