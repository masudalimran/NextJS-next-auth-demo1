import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);
  // console.log("from useCurrentUser Hook", data);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
