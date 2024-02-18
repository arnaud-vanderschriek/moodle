import { Box, Button, Container, Grid, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataTable from '../DataTable';
import BasicTable from '../BasicTable';
import { useDispatch } from 'react-redux';
import { User } from '../../types';

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    const response = await dispatch.courses.GetAllCourses();
    setData(response);
    console.log(data, "data in fetchData")
  }

  const searchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSearchData(data.filter((courses) => 
    //   (courses.name).toLowerCase().includes(e.target.value.toLowerCase())));
  }

  return ( 
    <React.Fragment>
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
              <h2>Moodle Courses list.</h2>
              <p>Please select one or several courses.</p>
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
              <BasicTable data={ searchData.length == 0 ? data : searchData } />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
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
                  <h2>Following Courses.</h2>  
                  <DataTable />
              </Container>
            </Box>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}

export default Courses