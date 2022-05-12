/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import useTimeout from './useTimeout';

type useDebounceProps = {
  callback: () => void;
  delay: number;
  dependencies?: Array<any>;
};

export const useDebounce = ({
  callback,
  delay,
  dependencies = [],
}: useDebounceProps) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
};

export default useDebounce;
