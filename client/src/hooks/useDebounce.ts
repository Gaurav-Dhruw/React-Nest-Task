import { useEffect } from 'react';
import { useTimeout } from './useTimeout';

export const useDebounce = (callback:any, delay:any, deps:any[]) => {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [...deps,reset]);
  useEffect(clear, []);
}