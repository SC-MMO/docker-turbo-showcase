import express, { Request, Response } from "express";
const router = express.Router();
import { prisma } from "@repo/db";
router.get("/fruits", (req: Request, res: Response) => {
  res.json({
    fruits: [
      "Appleasds",
      "Aprict",
      "Avocado",
      "Banana",
      "Blackberry",
      "Blueberry",
      "Boysenberry",
      "Cantaloupe",
      "Cherry",
      "Clementine",
      "Coconut",
      "Cranberry",
      "Currant",
      "Date",
      "Dragonfruit",
      "Durian",
      "Elderberry",
      "Feijoa",
      "Fig",
      "Gooseberry",
    ],
  });
});

router.get("/test", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({});
  res.json({ users: users });
});

export { router };
