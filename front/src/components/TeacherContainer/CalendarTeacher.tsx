import { Grid, Paper } from '@mui/material'
import React from 'react'
import Calendar from '../Calendar'

const CalendarTeacher = () => {
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
        <Calendar />
      </Paper>
      </Grid>
 
  </React.Fragment>
  )
}

export default CalendarTeacher