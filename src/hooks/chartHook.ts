import { useCallback } from 'react';
import { parse } from 'json5';

import { useCodeContext } from 'contexts/CodeContext';
import { useEventsContext } from 'contexts/EventsContext';

export const useGenerateChart = () => {
  const { code } = useCodeContext();
  const { setEvents } = useEventsContext();

  return useCallback(() => {
    const lines = code.split('\n');

    console.log(lines);
  }, []);
};
