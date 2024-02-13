import { Box, Button, Container } from '@mui/material'
import React, { useState } from 'react'
import Calendar from '../Calendar'

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Box sx={{display: 'flex'}}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <h1>Courses.</h1>
          
          <Button variant='contained' onClick={() => setIsOpen(!isOpen)}>Show all courses.</Button>
          { 
            isOpen && <p>Ici liste des cours.</p> 
          }
      </Container>
    </Box>
  )
}

export default Courses