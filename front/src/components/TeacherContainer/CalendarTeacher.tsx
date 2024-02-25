import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Button } from '@mui/material';
import { EventInput } from '@fullcalendar/core';

const CalendarTeacher = (events: any) => {
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
