import React from 'react'
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Grid, Paper } from '@mui/material';

const Download = () => {
 
      const { data, loading } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 4,
        maxColumns: 6,
      });

      console.log(data, "data in Download");
    
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
            <h1>Download...</h1>
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid {...data} loading={loading} slots={{ toolbar: GridToolbar }} />
            </div>
          </Paper>
          </Grid>
     
      </React.Fragment>
      );
    }
  


export default Download