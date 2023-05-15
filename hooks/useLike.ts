import useCurrentUser from "./useCurrentUser";
import usePost from "./usePost";
import usePosts from "./usePosts";
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const useLike = ({ postId, userId }: { postId: string; userId?: string }) => {
  const { data: currentUser } = useCurrentUser();

  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);

  const { mutate: mutateFetchedPosts } = usePosts(userId);

  const loginModal = useLoginModal();

  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];
    return list.includes(currentUser?.id);
  }, [currentUser?.id, fetchedPost?.likedIds]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;
      if (hasLiked) {
        request = () => axios.delete("/api/like", { params: { postId } });
      } else {
        request = () => axios.post("/api/like", { postId });
      }
      //   console.log(request);
      await request();
      //   console.log(postId);
      mutateFetchedPost();
      mutateFetchedPosts();
      if (hasLiked) toast.error("Not Liking Anymore");
      else toast.success("Liking Now");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      return;
    }
  }, [
    currentUser,
    hasLiked,
    loginModal,
    mutateFetchedPost,
    mutateFetchedPosts,
    postId,
  ]);

  return {
    hasLiked,
    toggleLike,
  };
};

export default useLike;
