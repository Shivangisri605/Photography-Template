import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

export async function sendContactEmail(
  name: string,
  email: string,
  message: string
) {
  const recipientEmail = 'shividu2005@gmail.com';

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: recipientEmail,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Message</h2>
          
          <div style="margin: 20px 0;">
            <p style="color: #666; margin: 10px 0;">
              <strong>Name:</strong> ${name}
            </p>
            <p style="color: #666; margin: 10px 0;">
              <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
            </p>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
            <p>This is an automated message from your portfolio website contact form.</p>
          </div>
        </div>
      </div>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
