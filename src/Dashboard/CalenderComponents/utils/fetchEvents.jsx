const fetchEvents = async () => {
    // Simulate an API call
    return [
      {
        title: 'Sample Event',
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate() + 1)),
        allDay: true,
      },
    ];
  };
  
  export default fetchEvents;
  