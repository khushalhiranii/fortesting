import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, Card, CardMedia } from '@mui/material';

const DocumentUploader = () => {
  const [panNumber, setPanNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [aadharCardFile, setAadharCardFile] = useState(null);
  const [panCardFile, setPanCardFile] = useState(null);
  const [userPhotoFile, setUserPhotoFile] = useState(null);
  const [signatureFile, setSignatureFile] = useState(null);

  const handlePanNumberChange = (event) => {
    setPanNumber(event.target.value);
  };

  const handleAadharNumberChange = (event) => {
    setAadharNumber(event.target.value);
  };

  const handleAadharCardChange = (event) => {
    const file = event.target.files[0];
    setAadharCardFile(file);
  };

  const handlePanCardChange = (event) => {
    const file = event.target.files[0];
    setPanCardFile(file);
  };

  const handleUserPhotoChange = (event) => {
    const file = event.target.files[0];
    setUserPhotoFile(file);
  };

  const handleSignatureChange = (event) => {
    const file = event.target.files[0];
    setSignatureFile(file);
  };

  // Function to handle displaying images
  const handleViewImage = (file) => {
    window.open(URL.createObjectURL(file), '_blank');
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Document Uploader
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="PAN Number"
            variant="outlined"
            value={panNumber}
            onChange={handlePanNumberChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Aadhar Number"
            variant="outlined"
            value={aadharNumber}
            onChange={handleAadharNumberChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            accept="image/*"
            id="aadhar-card-upload"
            type="file"
            onChange={handleAadharCardChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="aadhar-card-upload">
            <Button variant="contained" component="span">
              Upload Aadhar Card
            </Button>
          </label>
          {aadharCardFile && (
            <div style={{ marginTop: '10px' }}>
              <Button variant="outlined" onClick={() => handleViewImage(aadharCardFile)}>View Aadhar Card</Button>
            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            accept="image/*"
            id="pan-card-upload"
            type="file"
            onChange={handlePanCardChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="pan-card-upload">
            <Button variant="contained" component="span">
              Upload PAN Card
            </Button>
          </label>
          {panCardFile && (
            <div style={{ marginTop: '10px' }}>
              <Button variant="outlined" onClick={() => handleViewImage(panCardFile)}>View PAN Card</Button>
            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            accept="image/*"
            id="user-photo-upload"
            type="file"
            onChange={handleUserPhotoChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="user-photo-upload">
            <Button variant="contained" component="span">
              Upload User's Photograph
            </Button>
          </label>
          {userPhotoFile && (
            <div style={{ marginTop: '10px' }}>
              <Button variant="outlined" onClick={() => handleViewImage(userPhotoFile)}>View User's Photograph</Button>
            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            accept="image/*"
            id="signature-upload"
            type="file"
            onChange={handleSignatureChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="signature-upload">
            <Button variant="contained" component="span">
              Upload Signature
            </Button>
          </label>
          {signatureFile && (
            <div style={{ marginTop: '10px' }}>
              <Button variant="outlined" onClick={() => handleViewImage(signatureFile)}>View Signature</Button>
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DocumentUploader;
