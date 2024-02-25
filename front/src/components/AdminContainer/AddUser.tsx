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

	const data = [
		{ firstname: "Michel", lastname: "VanderDonck", cours: "ASP.NET"},
		{ firstname: "Etienne", lastname: "Poulain", cours: "Javascript"},
		{ firstname: "Karim", lastname: "El Rahbi", cours: "React"},
		{ firstname: "Yuong", lastname: "Yuan", cours: "Python"},
	]

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
            <Container>
							<Grid container spacing={6}>
								<Grid item lg={4}>
									<TextField
										margin="normal"
										required
										id="lastname"
										label="Last name"
										name="Lastname"
										autoComplete="lastname"
										autoFocus
									/>
								</Grid>
								<Grid item lg={4}>
									<TextField
										margin="normal"
										required
										id="firstname"
										label="Firstname"
										name="firstname"
										autoComplete='firstname'
									/> 	
								</Grid>
							</Grid>
						</Container>		
						<Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
							<Grid container spacing={6}>
								<Grid item lg={4}>
									<TextField
										margin="normal"
										required
										id="username"
										label="Username"
										name="username"
										autoComplete='username'
									/> 
								</Grid>						
								<Grid item lg={4}>
									<TextField
										type='email'
										margin="normal"
										required
										id="email"
										label="Email"
										name="email"
										autoComplete='email'
									/> 
								</Grid>
							</Grid>
						</Container>		
						<Container>
							<TextField
								margin="normal"
								select
								required
								fullWidth
								id=""
								label="Professeur"
								name="prof"
								autoComplete='prof'
							>
								{
									data.map((elem, index): any => (
										<option key={index} value={elem.lastname}>
										{elem.cours}
									</option>
									))
								}
							</TextField>
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