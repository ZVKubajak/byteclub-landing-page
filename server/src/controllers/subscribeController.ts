import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";
import { subscribeSchema } from "../schema/SubscribeSchema";

const prisma = new PrismaClient();

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

    await prisma.user.create({
      data: {
        name: parsedName,
        email: parsedEmail,
      },
    });

    res
      .status(201)
      .json({ message: `User subcribed under email: ${parsedEmail}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
