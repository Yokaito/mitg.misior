import useSWR from 'swr';
import axios from 'axios';
import env from '@/environment';

export const api = axios.create({
  baseURL: env.api.NEXTBASE_API_URL,
});

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate, isValidating } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url);

      return response.data;
    },
  );

  return { data, error, mutate, isValidating };
}
