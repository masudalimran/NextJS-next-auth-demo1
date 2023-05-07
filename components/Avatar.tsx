import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

type Props = {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
};

const Avatar = ({ userId, isLarge, hasBorder }: Props) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );
  return (
    <div
      className={`
      ${hasBorder ? "border-4 border-black" : ""} 
      ${isLarge ? "h-32" : "h-12"} 
      ${isLarge ? "w-32" : "w-12"}
      rounded-full hover:opacity-90 transition cursor-pointer relative
      `}
    >
      <Image
        fill
        style={{ objectFit: "cover", borderRadius: "100%" }}
        alt={fetchedUser?.name || "Avatar-guest"}
        onClick={onClick}
        src={fetchedUser?.profileImage || "/images/placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
