import { Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CursusList from './CursusList'
import Progress from './Progress'

const OverView = () => {
    const [cursus, setCursus] = useState([])
    useEffect(() => {
        fetchingData();
    }, [])

    const fetchingData = async () => {
        const response = await fetch("https://localhost:7155/api/Cursus")
        const data = await response.json();

        setCursus(data);
    }
  return (
    <React.Fragment>
      <Grid item xs={12} md={12} lg={8}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            height: 'auto',
          }}
        >
            <Progress />
        </Paper>
      </Grid>

      <Grid item xs={12} md={12} lg={4}>
          <Paper
             sx={{
                mb: 2,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
             }}
        >
            <h2>Average...</h2>
            <div>
          <h4>Moyenne: </h4>
          <label htmlFor="date">Moyenne générale</label>
          <input name='date' type="text"  disabled/>
        </div>
          </Paper>
          <Paper
             sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
             }}
        >
          
            <div>
          <h4>Date important: </h4>
          <label htmlFor="date">Date de controle:</label>
          <input name='date' type="text"  disabled/>
        </div>
        <div>
          <h4>Notes:</h4>
          <label htmlFor="date">Note pour le modules passés</label>
          <input name='date' type="text"  disabled/>
        </div>
          </Paper>
      </Grid>

      
      <Grid item xs={12} md={12} lg={12}>
          <Paper
             sx={{
                p: 2,
                height: 'auto',
             }}
        >
            <h2>Cursus List...</h2>
         <CursusList cursus={cursus} /> 
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
          <Paper
             sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'row',
                height: 'auto',
             }}
        >
            <h2>Average...</h2>
          </Paper>
      </Grid>
    </React.Fragment>
  )
}

export default OverView