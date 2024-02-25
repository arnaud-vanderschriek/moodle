import { Label } from '@mui/icons-material';
import { Box, Card, Container, Input, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Progress = () => {
  const userId = useSelector((state:any) => state.user.user.id);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
      const response = await axios.get(`https://localhost:7155/api/Users/${userId}/module-end-dates`)
      const data = response.data;
      setModules(data)
      console.log(modules, 'modules in Progress')
  }

  const getBackgroundColor = (endDate: string) => {
    const now = new Date();
    const end = new Date(endDate);

    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

    if (end.getTime() < now.getTime()) {
      return 'green'; 
    } else if (end.getTime() < oneWeekFromNow.getTime()) {
      return 'red'; 
    } else {
      return 'blue'; 
    }
  };

  return (
    <React.Fragment>
      <Container>
        <h1>Work Date.</h1>
        <Card sx={{ p : 2 , display: 'flex', flexDirection: 'column', width: '100%'}}>
          <Box sx={{  display: 'flex', flexDirection: 'column', width: '150px'}}>
            <Box component="div" sx={{mb: 1, backgroundColor: "green", color: "white", display: "flex", justifyContent: 'center' }}>Past</Box>
            <Box component="div" sx={{mb: 1, backgroundColor: "blue", color: "white", display: "flex", justifyContent: 'center' }}>Soon</Box>
            <Box component="div" sx={{mb: 2, backgroundColor: "red", color: "white", display: "flex", justifyContent: 'center' }}>Urgent</Box>
          </Box>
          { 
            modules.map((elem: any) => (
              <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{ display: 'flex', alignItems: 'center'}}><strong>Cours :</strong>{ elem.name }</Box>
                <TextField value={ elem.endDate } sx={{color: 'white', backgroundColor: getBackgroundColor(elem.endDate)}}/>
              </Box>
            ))
          }
        </Card> 
      </Container>
    </React.Fragment>
  )
}

export default Progress