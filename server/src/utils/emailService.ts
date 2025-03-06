import sgMail from "@sendgrid/mail";

const API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(API_KEY!);

export async function sendNewsletterEmail(to: string, name: string) {
  const msg = {
    to: to,
    from: "bryceberczik.dev@gmail.com",
    subject: "Your Weekly Newsletter",
    text: `Hello ${name},\n\nHere’s your weekly update...`,
    html: `<p>Hello ${name},</p><p>Here’s your weekly update...</p>`,
  };
  await sgMail.send(msg);
}

export async function sendWelcomeEmail(to: string, name: string) {
  const msg = {
    to: to,
    from: "bryceberczik.dev@gmail.com",
    subject: "Welcome to Byte Club!",
    text: `Hello ${name},\n\nWelcome to Byte Club! We're excited to have you on board. Stay tuned for our latest updates and news.`,
    html: `<p>Hello ${name},</p><p>Welcome to Byte Club! We're excited to have you on board. Stay tuned for our latest updates and news.</p>`,
  };
  await sgMail.send(msg);
}