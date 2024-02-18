import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, Paper, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddUser = () => {
	const dispatch = useDispatch();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
	}

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
			<h3>Adding User...</h3>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
          }}
        >
          <Box>
            <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
							<TextField
							
								margin="normal"
								required
								fullWidth
								id="lastname"
								label="Last name"
								name="lastname"
								autoComplete="lastname"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								id="firstname"
								label="firstname"
								name="firstname"
								autoComplete='firstname'
							/> 
						</Container>		
						<Container>
							<TextField
								margin="normal"
								required
								fullWidth
								id="prof"
								label="Professeur"
								name="prof"
								autoComplete='prof'
							/>
							<Button
								type="submit"
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
            		Enregistrer
        			</Button>
						</Container>
   		 		</Box>
			 </Paper>
			</Grid>
    </Box>
  )
}

export default AddUser