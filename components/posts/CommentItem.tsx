import React, { useCallback, useMemo } from "react";
import { CommentType } from "./comment";
import { useRouter } from "next/router";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "../Avatar";

type Props = {
  data: CommentType;
};

const CommentItem = ({ data }: Props) => {
  const router = useRouter();
  const gotToUser = useCallback(
    (event: any) => {
      event.stopPropagation();
      router.push(`/users/${data?.user.id}`);
    },
    [data?.user.id, router]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  return (
    <div className="border-b-[1px] border-neutral-500 p-5 cursor-pointer hover:bg-neutral-900 transition">
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              className="text-white font-semibold cursor-pointer hover:underline"
              onClick={gotToUser}
            >
              {data.user.name}
            </p>
            <span className="text-neutral-500 cursor-pointer hover:underline hidden md:block">
              @{data.user.username}
            </span>
            <span className="text-neutral-500 text-sm"> {createdAt}</span>
          </div>
          <div className="text-white mt-1">{data.body}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
