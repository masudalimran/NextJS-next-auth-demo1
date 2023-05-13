import { PostType } from "../posts/post";

export type UserType = {
  id: string;
  name?: string;
  username?: string;
  bio?: string;
  email: string;
  emailVerified?: string;
  image?: string;
  profileImage?: string;
  coverImage?: string;
  hashedPassword?: string;
  createdAt: string;
  updatedAt: string;
  followingIds: string[];
  hasNotification: boolean;

  posts: PostType[];
  comments: any[];
  notifications: any[];
};
