import React, { useCallback, useMemo } from "react";
import { PostType } from "./post";
import { useRouter } from "next/router";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "../Avatar";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

type Props = {
  userId?: string;
  data: PostType;
};

const PostItem = ({ userId, data }: Props) => {
  // console.log(userId);
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  // console.log("from Post Item", currentUser);

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();
      router.push(`/users/${data.user.id}`);
    },
    [data.user.id, router]
  );

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [data.id, router]);

  const onLike = useCallback(
    (event: any) => {
      event.stopPropagation();
      loginModal.onOpen();
    },
    [loginModal]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  return (
    <div
      className="border-b-[1px] border-neutral-500 p-5 cursor-pointer hover:bg-neutral-900 transition"
      onClick={goToPost}
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              className="text-white font-semibold cursor-pointer hover:underline"
              onClick={goToUser}
            >
              {data?.user?.name}
            </p>
            <span
              className="text-neutral-500 cursor-pointer hover:underline hidden md:block"
              onClick={goToUser}
            >
              @{data?.user.username}
            </span>
            <span className="bg-neutral-500 h-[1px] w-[1px]"></span>
            <span className="text-neutral-500 text-sm">{createdAt}</span>
          </div>
          <div className="text-white mt-1"> {data.body}</div>
          <div className="flex flex-row items-center mt-3 gap-10">
            <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
              <AiOutlineMessage size={20} />
              <p>{data.comments?.length || 0}</p>
            </div>
            <div
              className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500"
              onClick={onLike}
            >
              <AiOutlineHeart size={20} />
              <p>{data.likedIds?.length || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
