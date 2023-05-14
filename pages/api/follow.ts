import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return res.status(405).end();
  }
  try {
    // const { userId } = req.body;
    const userId = req.method === "POST" ? req.body.userId : req.query.userId;
    const { currentUser } = await serverAuth(req, res);
    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid User Id!");
    }
    const user = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
    });

    if (!user) {
      throw new Error("Invalid User!");
    }

    let updatedFollowingIds = [...user.followingIds];
    console.log(user.followingIds);

    if (req.method === "POST") {
      updatedFollowingIds.push(userId);
      console.log("code ran from follow.ts");
    }

    if (req.method === "DELETE") {
      updatedFollowingIds = updatedFollowingIds.filter(
        (followingId) => followingId !== userId
      );
    }

    const updateUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: updatedFollowingIds,
      },
    });
    // console.log(updateUser);

    return res.status(200).json(updateUser);
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
}
