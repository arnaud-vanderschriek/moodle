import { Box, Button, Container, Grid, Paper, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddCourses = () => {
	const dispatch = useDispatch();
	const [startDate, setStartDate] = useState<any>(dayjs());
	const [endDate, setEndDate] = useState<any>(dayjs());

	const handleStartDate = (data: any) => {
		setStartDate(dayjs(data).toISOString());
	}

	const handleEndDate = (data: any) => {
		setEndDate(dayjs(data).toISOString());
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			const data = new FormData(event.currentTarget);

			dispatch.courses.RegisterCourse({
				name: data.get('name'),
				description: data.get('description'),
				startDate: startDate,
				endDate: endDate
			})
	}

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
			<h3>Adding Courses...</h3>
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
					id="name"
					label="Course name"
					name="name"
					autoComplete="name"
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="description"
					label="Description"
					name="description"
					autoComplete='description'
				/> 
			</Container>
			</Box>
				<Box>
					<Container sx={{width: 'full'}}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={['DatePicker']}>
								<DatePicker 
									sx={{ width: 'auto'}}
									value={startDate}
									label="start date" 
									format='d/MM/YYYY'
									onChange={handleStartDate} />

								<DatePicker
									sx={{ width: 'auto', ml: 1}}
									value={endDate} 
									label="end date" 
									format='d/MM/YYYY'
									onChange={handleEndDate} />
							</DemoContainer>
						</LocalizationProvider>		
				</Container>	
					</Box>			
					<Box>		
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

export default AddCourses