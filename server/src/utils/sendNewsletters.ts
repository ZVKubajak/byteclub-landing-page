import cron from "node-cron";
import { PrismaClient } from "@prisma/client";
import { sendNewsletterEmail } from "./emailService";

const prisma = new PrismaClient();

cron.schedule("*/10 * * * * *", async () => {
  try {
    console.log("Cron job connected.")
    const subscribers = await prisma.user.findMany();

    if (subscribers.length === 0) {
        return "No subscribers";
    };

    for (const subscriber of subscribers) {
      await sendNewsletterEmail(subscriber.email, subscriber.name);
    }
    console.log("Weekly newsletter sent successfully!");
  } catch (error) {
    console.error("Error sending weekly newsletter:", error);
  }
});
