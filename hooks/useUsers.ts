import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useUsers = () => {
  // SWR library replaces redux for global state management
  const { data, error, isLoading, mutate } = useSWR('/api/users', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
