import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

const CalendarTeacher = () => {
  return (
    <FullCalendar
      themeSystem="tailwind"
      plugins={ [ interactionPlugin, dayGridPlugin ]}
      initialView="dayGridMonth"
      height="400px"
      aspectRatio={2}
      editable={true}
      droppable={true}
      selectable={true}
    />
  );
};

export default CalendarTeacher;
