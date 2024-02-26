import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = (props: any) => {
  return (
    <React.Fragment>
      <FullCalendar
        themeSystem="tailwind"
        plugins={ [ interactionPlugin, dayGridPlugin ]}
        initialView="dayGridMonth"
        height="400px"
        aspectRatio={2}
        events={props.calendarEvents}
        weekends={props.weekendsVisible}  
        editable={true}
        droppable={true}
        selectable={true}
        eventResize={props.resize}
        eventClick={props.delEvent}
        eventResizeStart={props.resize}
        eventDrop={props.handleEventDrop}
        eventReceive={props.handleEventReceive}
      />
    </React.Fragment>
  );
};

export default Calendar;
