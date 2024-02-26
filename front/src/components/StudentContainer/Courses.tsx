import { Box, Button, Container, Grid, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataTable from '../DataTable';
import BasicTable from '../BasicTable';
import { useDispatch, useSelector } from 'react-redux';
import StudentCalendar from './StudentCalendar';
import axios from 'axios';

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [ cursus, setCursus] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([])
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();
  const userId = useSelector((state:any) => state.user.user.id);
  
  useEffect(() => {
    fetchData();
    fetchCursus();
  }, [])
  
  const fetchCursus = async ( ) => {
    const response = await axios.get(`https://localhost:7155/api/users/${userId}/cursus`);
    const data = response.data;
    setCursus(data);
  }
  
  const fetchData = async () => {
    const response = await dispatch.courses.GetAllCourses();
    setData(response);
  }

  const searchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(data.filter((courses: any) => 
      (courses.name).toLowerCase().includes(e.target.value.toLowerCase())));
  }

  const handleCourses = (event: any, data: any) => {
    if(event.target.checked === true) {
      setSelectedCourses((prevCourses):any => [...prevCourses, data])
    }
    else {
      setSelectedCourses((prevCourses):any => prevCourses.filter((elem:any) => elem.id !== data.id));
    }

  }

  const handleRegistrationCourses = () => {
    console.log(selectedCourses)
  }

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
          <StudentCalendar />
        </Paper>
        </Grid>
      <Grid item xs={12} md={12} lg={8}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
          }}
        >
          <Box sx={{display: 'flex'}}>
            <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
              <h2>All Courses.</h2>
              <TextField
                margin="normal"
                required
                fullWidth
                id="search"
                label="Search Courses"
                name="search_courses"
                autoComplete="search-courses"
                onChange={searchBar}
                autoFocus
              />
              <BasicTable data={ searchData.length == 0 ? data : searchData } selectCourse={handleCourses} />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleRegistrationCourses}
              >
                Inscription
              </Button>
            </Container>
          </Box>
        </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 'auto',
            }}
          >
            <Box sx={{display: 'flex'}}>
              <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
                  <h2>Following Cursus.</h2>  
                  <DataTable cursus={cursus} />
              </Container>
            </Box>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}

export default Courses