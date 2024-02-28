import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import { useSelector } from 'react-redux';

const Calendar = () => {
  const userId = useSelector((state:any) => state.user.user.id);
  const [courses, setCourses] = useState({
    events: []
  });

  useEffect(() => {
      fetchIngCourses();
  }, [])

  const fetchIngCourses = async() => {
    const response = await axios.get(`https://localhost:7155/api/users/${userId}/courses`)
    const data = response.data;

    setCourses(prevState => ({
        ...prevState,
        events: data.map((elem: any) => ({
            id: elem.id,
            title: elem.name,
            start: elem.startDate,
            end: elem.endDate
        }))
    }));
  }
  
  return (
    <React.Fragment>
      <h1>Courses planning</h1>
      <FullCalendar
        themeSystem="tailwind"
        plugins={ [ interactionPlugin, dayGridPlugin ]}
        initialView="dayGridMonth"
        height="600px"
        aspectRatio={2}
        events={courses.events}
        editable={true}
        droppable={true}
        selectable={true}
        hiddenDays={[0, 6]}
        
      />
    </React.Fragment>
  );
};

export default Calendar;
