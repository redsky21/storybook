import { useCallback } from 'react';
import { useToasts } from 'react-toast-notifications';

export function useToast() {
  const { addToast } = useToasts();

  const handleToastAdd = useCallback(
    (type: 'success' | 'info' | 'warning' | 'error' = 'info', message: string = '') => {
      addToast(message, { appearance: type });
    },
    [addToast],
  );
  return handleToastAdd;
}
