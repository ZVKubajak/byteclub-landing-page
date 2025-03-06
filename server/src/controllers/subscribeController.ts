import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";
import { subscribeSchema, idSchema } from "../schema/SubscribeSchema";
import { sendWelcomeEmail } from "../utils/emailService";

const prisma = new PrismaClient();

export const getSubscriber = async (req: Request, res: Response) => {
  const { email } = req.params;
  const parsedBody = subscribeSchema.pick({ email: true }).safeParse({ email });

  if (!parsedBody.success) {
    res.status(400).json({ message: "parsedBody failed." });
    return;
  }

  const parsedEmail = parsedBody.data.email;

  try {
    const user = await prisma.user.findUnique({
      where: { email: parsedEmail },
    });

    if (!user) {
      res.json({ message: "No user found." });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const subscribe = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const parsedBody = subscribeSchema.safeParse({ name, email });

  if (!parsedBody.success) {
    res.status(400).json({ message: "parsedBody failed." });
    return;
  }
  const parsedName = parsedBody.data.name;
  const parsedEmail = parsedBody.data.email;

  try {
    const user = await prisma.user.findUnique({
      where: { email: parsedEmail },
    });

    if (user) {
      res
        .status(400)
        .json({ message: "User already subscribed with this email." });
      return;
    }

    const newUser = await prisma.user.create({
      data: {
        name: parsedName,
        email: parsedEmail,
      },
    });

    await sendWelcomeEmail(newUser.email, newUser.name);
    console.log("Sent welcome letter.");
    res
      .status(201)
      .json({ message: `User subcribed under email: ${parsedEmail}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const unsubscribe = async (req: Request, res: Response) => {
  const { email } = req.body;
  const parsedBody = subscribeSchema.pick({ email: true }).safeParse({ email });

  if (!parsedBody.success) {
    res.status(400).json({ message: "parsedBody failed." });
    return;
  }

  const parsedEmail = parsedBody.data.email;

  try {
    const user = await prisma.user.findUnique({
      where: { email: parsedEmail },
    });

    if (!user) {
      res.status(404).json({ message: "No user found with that ID." });
      return;
    }

    await prisma.user.delete({
      where: { email: parsedEmail },
    });

    res.status(200).json({ message: "User unsubscribed to newsletter." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
