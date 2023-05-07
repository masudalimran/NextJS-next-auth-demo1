import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/users/${userId}` : null,
    fetcher
  );
  // console.log("from useCurrentUser Hook", data);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
