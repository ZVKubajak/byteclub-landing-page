import { Recipient, EmailParams, MailerSend, Sender } from "mailersend";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.MAILERSEND_API_KEY;
console.log("apikey: ", API_KEY);
const mailersend = new MailerSend({ apiKey: API_KEY! });

export async function sendNewsletterEmail(to: string, name: string) {
  const recipient = new Recipient(to, name);

  const emailParams = new EmailParams()
    .setFrom(new Sender("support@byteclubapp.com", "Byteclub Support"))
    .setTo([recipient])
    .setSubject("Your Weekly Newsletter")
    .setText(`Hello ${name},\n\nHere’s your weekly update...`)
    .setHtml(`<p>Hello ${name},</p><p>Here’s your weekly update...</p>`);

  try {
    // Send the email using MailerSend's API.
    await mailersend.email.send(emailParams);
  } catch (error) {
    console.error("Failed to send newsletter email:", error);
    throw error;
  }
}

export async function sendWelcomeEmail(to: string, name: string) {
  // Create a URL-safe version of the email
  const encodedEmail = encodeURIComponent(to);
  const recipient = new Recipient(to, name);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to Byte Club!</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" style="padding: 40px 0;">
              <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08); max-width: 100%;">
                <!-- Header -->
                <tr>
                  <td align="center" style="background: linear-gradient(135deg, #e02d31 0%, #b31217 100%); padding: 35px 20px;">
                    <h1 style="margin: 0; font-size: 32px; color: #ffffff; text-transform: uppercase; letter-spacing: 1px;">Byte Club</h1>
                  </td>
                </tr>
                <!-- Welcome Banner -->
                <tr>
                  <td style="padding: 30px 40px 10px; text-align: center;">
                    <h1 style="margin: 0; color: #333333; font-size: 28px; font-weight: 700;">Welcome to Byte Club!</h1>
                  </td>
                </tr>
                <!-- Body -->
                <tr>
                  <td style="padding: 20px 40px 40px; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                    <p style="margin: 0 0 20px 0;">Hello <span style="font-weight: 600; color: #e02d31;">${name}</span>,</p>
                    <p style="margin: 0 0 20px 0;">
                      We're thrilled to welcome you to <strong style="color: #e02d31;">Byte Club</strong>! You're now part of our vibrant community of food lovers! Here, we're dedicated to uncovering the best dining experiences near you—and you'll earn rewards every time you treat yourself to a memorable meal.
                    </p>
                    <p style="margin: 0 0 20px 0;">Here's what you can expect:</p>
                    <ul style="margin: 0 0 25px 0; padding-left: 20px;">
                      <li style="margin-bottom: 8px;">Unlock exclusive insights into our app development journey</li>
                      <li style="margin-bottom: 8px;">Gain early access to cutting-edge beta features</li>
                      <li style="margin-bottom: 8px;">Enjoy special promo codes on our upcoming app launches</li>
                    </ul>
                    <!-- CTA Button -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 30px 0;">
                      <tr>
                        <td align="center">
                          <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer" style="background-color: #e02d31; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; display: inline-block; font-size: 16px;">Explore Our Site</a>
                        </td>
                      </tr>
                    </table>
                    <p style="margin: 20px 0 10px 0;">Have questions? Visit our site to contact us.</p>
                    <p style="margin: 25px 0 0 0; font-weight: 600;">Sincerely</p>
                    <p style="margin: 5px 0 0 0; font-weight: 600; color: #e02d31;">The Byte Club Team</p>
                  </td>
                </tr>
                <!-- Social Media -->
<tr>
  <td align="center" style="padding: 0 40px 30px;">
    <table border="0" cellpadding="0" cellspacing="0">
      <tr>
        <!-- LinkedIn -->
        <td style="padding: 0 10px;">
          <a href="https://www.linkedin.com/in/byte-club-837a83354/" style="display: inline-block;">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 448 512">
              <path fill="#e02d31" d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.6 53.6 0 1 1 53.6-53.6 53.6 53.6 0 0 1-53.6 53.6zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.4-79.3-48.4 0-55.8 37.8-55.8 76.7V448H158.2V148.9h89V196h1.3c12.4-23.5 42.6-48.4 87.7-48.4 93.8 0 111.1 61.8 111.1 142.3V448z"/>
            </svg>
          </a>
        </td>
        <!-- Instagram -->
        <td style="padding: 0 10px;">
          <a href="https://www.instagram.com/byteclubappofficial/" style="display: inline-block;">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 448 512">
              <path fill="#e02d31" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 189.6c-41.3 0-74.7-33.4-74.7-74.7 0-41.3 33.4-74.7 74.7-74.7 41.3 0 74.7 33.4 74.7 74.7 0 41.3-33.4 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zM398.8 80.1c-1-21.6-5.7-40.7-20.4-55.3C364.7 10.7 345.6 6 324 5c-21.4-1-85.8-1-107.2 0-21.6 1-40.7 5.7-55.3 20.4C135.3 39.3 130.6 58.4 129.6 80c-1 21.4-1 85.8 0 107.2 1 21.6 5.7 40.7 20.4 55.3 14.6 14.6 33.7 19.3 55.3 20.4 21.4 1 85.8 1 107.2 0 21.6-1 40.7-5.7 55.3-20.4 14.6-14.6 19.3-33.7 20.4-55.3 1-21.4 1-85.8 0-107.2zM398.8 338c0 29.2-23.7 52.9-52.9 52.9H102.1c-29.2 0-52.9-23.7-52.9-52.9V173.1c0-29.2 23.7-52.9 52.9-52.9h243.8c29.2 0 52.9 23.7 52.9 52.9V338z"/>
            </svg>
          </a>
        </td>
        <!-- Facebook -->
        <td style="padding: 0 10px;">
          <a href="https://www.facebook.com/profile.php?id=61574064445155" style="display: inline-block;">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 320 512">
              <path fill="#e02d31" d="M279.14 288l14.22-92.66h-88.91V131.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S259.91 0 225.36 0C141.09 0 89.09 54.42 89.09 153.69v68.65H0v92.66h89.09V512h107.75V288z"/>
            </svg>
          </a>
        </td>
        <!-- TikTok -->
        <td style="padding: 0 10px;">
          <a href="https://www.tiktok.com/@byteclubofficial" style="display: inline-block;">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 448 512">
              <path fill="#e02d31" d="M448,209.91a210.39,210.39,0,0,1-123.74-38.23v98.6a137.91,137.91,0,0,1-137.91,137.91A137.91,137.91,0,0,1,149,270.51V164.33a210.38,210.38,0,0,1-123.74-38.23V488A24,24,0,0,0,49,512H125a24,24,0,0,0,24-24V345.91a84,84,0,1,1,85-84v-44A208.91,208.91,0,0,1,448,209.91Z"/>
            </svg>
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f9fa; padding: 30px 40px; border-top: 1px solid #e9ecef;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="color: #6c757d; font-size: 13px; line-height: 1.5; text-align: center;">
                          <p style="margin: 0 0 10px 0;">© 2025 Byte Club. All rights reserved.</p>
                          <p style="margin: 0;">
                            <a href="http://localhost:3000/unsubscribe/${encodedEmail}" style="color: #e02d31; text-decoration: none;">Unsubscribe</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const emailParams = new EmailParams()
    .setFrom(new Sender("support@byteclubapp.com", "Byteclub Support"))
    .setTo([recipient])
    .setSubject("Welcome to Byte Club!")
    .setText(
      `Hello ${name},

Welcome to Byte Club! We're excited to have you on board. Stay tuned for our latest updates and news.

—The Byte Club Team`
    )
    .setHtml(htmlContent);

  try {
    await mailersend.email.send(emailParams);
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw error;
  }
}
