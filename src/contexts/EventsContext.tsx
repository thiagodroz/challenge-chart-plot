import React, { useContext, ReactNode, useState } from 'react';

import { Event } from 'types/Event';

interface Context {
  readonly events: Event[];
  readonly setEvents: (events: Event[]) => void;
}

interface EventsProviderProps {
  readonly children: ReactNode;
}

const EventsContext = React.createContext<Context | null>(null);

export const EventsProvider = ({ children }: EventsProviderProps) => {
  const [events, setEvents] = useState<Event[]>([]);

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEventsContext = (): Context => {
  const context = useContext(EventsContext);

  if (context === null) {
    throw new Error('No EventsContext provided.');
  }

  return context;
};
