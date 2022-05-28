import useSWR from 'swr';
import axios from 'axios';
import env from '@/environment';

export const api = axios.create({
  baseURL: env.api.url,
});

export function useFetch<Data = any, Error = any>(url: string, body?: any) {
  const { data, error, mutate, isValidating } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url, {
        data: body,
      });

      return response.data;
    },
  );

  return { data, error, mutate, isValidating };
}
