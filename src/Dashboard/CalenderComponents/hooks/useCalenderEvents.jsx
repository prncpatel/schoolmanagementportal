import { useState, useEffect } from 'react';
import fetchEvents from '../utils/fetchEvents';
import moment from 'moment';

const useCalendarEvents = () => {
  const [events, setEvents] = useState([{
    id: 0,
    title: 'Sample Event 1',
    start: new Date(moment().startOf('day').toDate()),
    end: new Date(moment().endOf('day').toDate()),
    description: 'This is a sample event 1 description',
  },
  {
    id: 1,
    title: 'Sample Event 2',
    start: new Date(moment().startOf('day').add(1, 'days').toDate()),
    end: new Date(moment().endOf('day').add(1, 'days').toDate()),
    description: 'This is a sample event 2 description',
  }]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const fetchedEvents = await fetchEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    loadEvents();
  }, []);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return { events, addEvent };
};

export default useCalendarEvents;
