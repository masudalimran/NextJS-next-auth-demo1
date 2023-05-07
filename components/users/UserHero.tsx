import useUser from "@/hooks/useUser";
import Image from "next/image";
import React from "react";
import Avatar from "../Avatar";

type Props = {
  userId: string;
};

const UserHero = ({ userId }: Props) => {
  const { data: fetchedUser } = useUser(userId as string);
  return (
    <div>
      <div className="bg-neutral-700 h-44 relative ">
        <Image
          src={fetchedUser?.coverImage || "/images/coverImage.png"}
          fill
          alt={fetchedUser?.name}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
};

export default UserHero;
