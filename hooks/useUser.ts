import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useUser = (userId: string) => {
  // SWR library replaces redux for global state management
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/users/${userId}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
