import { Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Calendar from '../Calendar'

const CalendarTeacher = () => {
    const [events, setEvents] = useState([]);

  const fetchEventsFromApi = async () => {
    try {
      const response = await fetch('https://localhost:7155/api/courses');
      const data = await response.json();
      console.log(data, 'fetch for calendar')
      setEvents((events) => events = data);
      console.log(events, "events in teacherCalendar")
    } catch (error) {
      console.error('Erreur lors de la récupération des événements depuis l\'API:', error);
    }
  };

  useEffect(() => {
    fetchEventsFromApi();
  }, []); 

  const customizeDayCell = (cellInfo: any) => {
    const dayOfMonth = cellInfo.date.getDate();
    const isWeekend = cellInfo.date.getDay() === 0 || cellInfo.date.getDay() === 6; // 0 pour dimanche, 6 pour samedi

    if (isWeekend) {
      return {
        classes: 'weekend-day',
        content: dayOfMonth 
      };
    }

    return dayOfMonth;
  };
  return (
    <React.Fragment>
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
        }}
      >
        <h1>Sessions date.</h1>
        <Calendar events={events} />
      </Paper>
      </Grid>
  </React.Fragment>
  )
}

export default CalendarTeacher