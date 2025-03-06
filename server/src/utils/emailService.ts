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
    text: `Hello ${name},

Welcome to Byte Club! We're excited to have you on board. Stay tuned for our latest updates and news.

—The Byte Club Team`,
    html: `
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
                    <p style="margin: 0 0 20px 0;">
                      Here's what you can expect:
                    </p>
                    <ul style="margin: 0 0 25px 0; padding-left: 20px;">
                      <li style="margin-bottom: 8px;">Unlock exclusive insights into our app development journey</li>
                      <li style="margin-bottom: 8px;">Gain early access to cutting-edge beta features</li>
                      <li style="margin-bottom: 8px;">Enjoy special promo codes on our upcoming app launches</li>
                    </ul>
                    <!-- CTA Button -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 30px 0;">
                      <tr>
                        <td align="center">
                          <a href="#" style="background-color: #e02d31; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; display: inline-block; font-size: 16px;">Explore Our Site</a>
                        </td>
                      </tr>
                    </table>
                    <p style="margin: 20px 0 10px 0;">
                      Have questions? Visit our site to contact us.
                    </p>
                    <p style="margin: 25px 0 0 0; font-weight: 600;">Happy coding!</p>
                    <p style="margin: 5px 0 0 0; font-weight: 600; color: #e02d31;">The Byte Club Team</p>
                  </td>
                </tr>
                <!-- Social Media -->
                <tr>
                  <td align="center" style="padding: 0 40px 30px;">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 0 10px;">
                          <a href="#" style="display: inline-block; width: 32px; height: 32px; line-height: 32px; text-align: center; background-color: #f0f2f5; border-radius: 50%; color: #e02d31; font-weight: bold; text-decoration: none;">T</a>
                        </td>
                        <td style="padding: 0 10px;">
                          <a href="#" style="display: inline-block; width: 32px; height: 32px; line-height: 32px; text-align: center; background-color: #f0f2f5; border-radius: 50%; color: #e02d31; font-weight: bold; text-decoration: none;">L</a>
                        </td>
                        <td style="padding: 0 10px;">
                          <a href="#" style="display: inline-block; width: 32px; height: 32px; line-height: 32px; text-align: center; background-color: #f0f2f5; border-radius: 50%; color: #e02d31; font-weight: bold; text-decoration: none;">G</a>
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
                            <a href="#" style="color: #e02d31; text-decoration: none;">Privacy Policy</a> • 
                            <a href="#" style="color: #e02d31; text-decoration: none;">Unsubscribe</a>
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
    `,
  };
  await sgMail.send(msg);
}