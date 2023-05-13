import { UserType } from "../users/user";

export type PostType = {
  id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: UserType;
  likedIds: string[];
  comments: any[];
};
