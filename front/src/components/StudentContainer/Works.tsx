import { Grid, Input, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import InputFileUpload  from './Sender'
import axios from 'axios'
import TextArea from './TextArea'
import UnstyledSelectBasic  from './DropDown'

const Works = () => {  
  const [file, setFile] = useState(null);

  const handleFileChange = (event: any) =>    {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log(file)
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      axios.post('...', formData)
        .then((response) => {
          console.log('Fichier envoyé avec succès:', response);
        })
        .catch((error) => {
          console.error('Erreur lors de l\'envoi du fichier:', error);
        });
    } else {
      console.error('Aucun fichier sélectionné');
    }
  };
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
          <h1>Send work.</h1>
          <UnstyledSelectBasic />
          <TextArea />
          <TextField multiline/>
          <Input
            type="file"
            onChange={handleFileChange}
          />
          <InputFileUpload handleUpload={handleUpload}/>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}

export default Works