import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import usePosts from "@/hooks/usePosts";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

type Props = {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
};

const Form = ({ placeholder, isComment, postId }: Props) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();

  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/posts", { body });
      toast.success("Tweeted Successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong!");
      setBody("");
      mutatePosts();
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      <div className="py-8"></div>
    </div>
  );
};

export default Form;
