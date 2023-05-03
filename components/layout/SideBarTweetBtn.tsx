import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

type Props = {};

const SideBarTweetBtn = (props: Props) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);
  return (
    <div onClick={onClick}>
      <div
        className="
        mt-6
        lg:hidden
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        bg-sky-500
        hover:bg-opacity-10
        transition
        cursor-pointer
    "
      >
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="
        mt-6
        hidden 
        lg:block
        px-4py-2
        rounded-full
        bg-sky-500
        hover:bg-opacity-90
        cursor-pointer
        transition
        "
      >
        <p
          className="
            hidden
            lg:block
            text-center
            font-semibold
            text-white
            text-[20px]
            py-2
        "
        >
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SideBarTweetBtn;
