import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PATCH") {
    return res.status(405).end();
  }
  try {
    // console.log("Came to edit.ts", req.body);
    const { currentUser } = await serverAuth(req, res);
    const { name, username, bio, profileImage, coverImage } = req.body;
    if (!name || !username) {
      throw new Error("Missing fields");
    }
    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        username,
        profileImage,
        coverImage,
        bio,
      },
    });

    return res.status(200).json(updatedUser);
    // console.log(req.body);
    // return;
  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }
}
