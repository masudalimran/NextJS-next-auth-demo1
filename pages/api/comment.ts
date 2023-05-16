import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") res.status(405).end();

  try {
    const { currentUser } = await serverAuth(req, res);
    // console.log("comment js code ran", currentUser);
    const { body } = req.body;
    const { postId } = req.query;
    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid post id");
    }

    const comment = await prisma.comment.create({
      data: {
        body,
        userId: currentUser.id,
        postId,
      },
    });

    try {
      const post = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });

      if (post?.userId) {
        await prisma.notification.create({
          data: {
            body: `${currentUser.name} replied to your tweet`,
            userId: post.userId,
          },
        });

        await prisma.user.update({
          where: {
            id: post.userId,
          },
          data: {
            hasNotification: true,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }

    return res.status(200).json(comment);
  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }
}
