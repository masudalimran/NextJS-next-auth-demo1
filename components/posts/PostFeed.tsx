import usePosts from "@/hooks/usePosts";
import React from "react";
import PostItem from "./PostItem";
import { PostType } from "./post";

type Props = {
  userId?: string;
};

const PostFeed = ({ userId }: Props) => {
  const { data: posts = [] } = usePosts(userId);
  return (
    <>
      {posts.map((post: PostType, index: number) => (
        <PostItem key={post?.id || index} userId={userId} data={post} />
      ))}
    </>
  );
};

export default PostFeed;
