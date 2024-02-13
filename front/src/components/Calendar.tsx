import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="400px"
        aspectRatio={2}
        events={[
          { title: 'Event 1', date: '2024-02-13' },
          { title: 'Event 2', date: '2024-02-14' },
          // Ajoutez autant d'événements que vous le souhaitez
        ]}
      />
  );
};

export default Calendar; 