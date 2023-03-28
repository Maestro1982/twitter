import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useCurrentUser = () => {
  // SWR library replaces redux for global state management
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
