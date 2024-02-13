import { Box, Container } from '@mui/material'
import React from 'react'
import Calendar from '../Calendar'

const FollowingCourses = () => {
  return (
    <Box sx={{display: 'flex'}}>
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Calendar />
    </Container>
  </Box>
  )
}

export default FollowingCourses