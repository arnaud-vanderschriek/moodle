import { Grid, Paper } from '@mui/material'
import React from 'react'
import TabPanel from './TabPanel';

const CoursesManagement = () => {
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
          <TabPanel />
        </Paper>
      </Grid>
    </React.Fragment>
  )
}

export default CoursesManagement;