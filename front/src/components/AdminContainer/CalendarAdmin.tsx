import { Button, Card, Grid, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Calendar from '../Calendar'
import { randomColor } from '../../services/utils/RandomColor';
import { Draggable } from '@fullcalendar/interaction';

const CalendarTeacher = () => {
    const [events, setEvents] = useState([]);
    const [state, setState ] = useState({
      weekendsVisible: true,
      externalEvents: [],
      calendarEvents: [] as any
    })

  const fetchEventsFromApi = async () => {
    try {
      const response = await fetch('https://localhost:7155/api/courses');
      const data = await response.json();

      setEvents((events) => events = data);
    } catch (error) {
      console.error('Erreur lors de la récupération des événements depuis l\'API:', error);
    }
  };

  const addEvent = () => {
    const today = new Date();
    const todayFormatted = today.toISOString(); 
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const endOfMonthFormatted = endOfMonth.toISOString(); 

    let newEvent: any = {
      id: 3433,
      title: "Timed event",
      color: randomColor(),
      custom: "custom stuff",
      end: endOfMonthFormatted,
      start: todayFormatted
    };

    setState((state) => {
      return {
        ...state,
        // calendarEvents: state.calendarEvents.concat(newEvent),
        externalEvents: state.externalEvents.concat(newEvent)
      };
    });

  };

  const delEvent = (info: any) => {
    console.log(info, 'info in parent')
    setState(prevState => ({
      ...prevState,
      calendarEvents: prevState.calendarEvents.filter((event:any) => event.id !== info.event.id),
      externalEvents: prevState.externalEvents.filter((event: any) => event.id !== info.event.id)
    }));
  }


  const handleEventDrop = (info: any) => {
    const updatedEvents: any = state.calendarEvents.map((event: any) => {
      if (event.id === info.event.id) {
        return {
          ...event,
          start: info.event.start,
          end: info.event.end,
        };
      }
      return event;
    });

    setState({ ...state, calendarEvents: updatedEvents });
  };

  useEffect(() => {
    setState( prevState => ({
      ...prevState,
      calendarEvents: events.map((event: any) => ({
        id: event.id,
        title: event.name,
        start: event.startDate,
        end: event.endDate,
        color: randomColor()
      }))
    }))
  }, [events]);

  useEffect(() => {
    let draggableEl: any = document.getElementById("external-events");

    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl: any) {
        let id = eventEl.dataset.id;
        let title = eventEl.getAttribute("title");
        let color = eventEl.dataset.color;
        let custom = eventEl.dataset.custom;
        let start = eventEl.dataset.start;
        let end = eventEl.dataset.end;

        return {
          id: id,
          title: title,
          color: color,
          custom: custom,
          create: true,
          start: start,
          end: end
        };
      }
    });
  }, [events])


  const handleEventReceive = (eventInfo: any) => {

    const newEvent: any = {
      id: eventInfo.draggedEl.getAttribute("data-id"),
      title: eventInfo.draggedEl.getAttribute("title"),
      color: eventInfo.draggedEl.getAttribute("data-color"),
      start: eventInfo.event.startStr,
      end: eventInfo.event.endStr,
      custom: eventInfo.draggedEl.getAttribute("data-custom")
    };

    console.log(newEvent, "tout l'objet event")

    setState((state) => {
      return {
        ...state,
        calendarEvents: state.calendarEvents.concat(newEvent)
      };
    });
  };

  const resize = (info: any) => {
    const updatedEvents = state.calendarEvents.map((event:any) => {
      if (event.id === info.event.id) {
        return { ...event, start: info.event.startStr, end: info.event.endStr };
      } else {
        return event;
      }
    });

    setState((state) => {
      return {
        ...state,
        calendarEvents: state.calendarEvents.concat(updatedEvents)
      };
    });
  }

  useEffect(() => {
    fetchEventsFromApi();
  }, []); 


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
        <Card sx={{ m: 2}}>
        <Grid container spacing={12}>
          <Grid item lg={4}>
            <TextField type='text' name='Name' placeholder='Name'/>
          </Grid>
          <Grid item lg={4}>
          <Button  
            type="submit"
            name="name"
            onClick={addEvent}  // fonction from props
            variant="contained"
            value="add external event" >
              Add Event
          </Button> 
          </Grid>
       
        </Grid>
      </Card>
      <div id="external-events">

  {state.externalEvents.map((event: any) => (
    <div
      className="fc-event fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event p-2"
      title={event.title}
      data-id={event.id}
      data-color={event.color}
      data-custom={event.custom}
      key={event.id}
      style={{
        backgroundColor: event.color,
        borderColor: event.color,
        cursor: "pointer"
      }}
      draggable={true}
    >
      <div className="fc-event-main">
        <div>
          <strong>{event.title}</strong>
        </div>
        {event.custom}
      </div>
    </div>
  ))}
</div>
        <Calendar 
          calendarEvents={state.calendarEvents} 
          weekends={state.weekendsVisible} 
          resize={resize}
          delEvent={delEvent}
          handleEventDrop={handleEventDrop}
          handleEventReceive={handleEventReceive}
        />
      </Paper>
      </Grid>
  </React.Fragment>
  )
}

export default CalendarTeacher