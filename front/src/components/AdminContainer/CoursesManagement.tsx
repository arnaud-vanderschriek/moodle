import { Box, Button, Container, Grid, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataTable from '../DataTable';
import BasicTable from '../BasicTable';
import { useDispatch } from 'react-redux';
import { User } from '../../types';
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