import { UserType } from "../users/user";
import { PostType } from "./post";

export type CommentType = {
  id: string;
  body?: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  postId: string;
  user: UserType;
  post: PostType;
};
