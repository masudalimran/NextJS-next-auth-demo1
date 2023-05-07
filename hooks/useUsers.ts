import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/users", fetcher);
  // console.log("from useCurrentUser Hook", data);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
