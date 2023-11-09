import React from 'react';
import { Container, Typography, Link, Grid, Box } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../index.css';

const Footer = () => {
  return (
    <div>
      <Box position="static" sx={{ bgcolor: '#272727', color: 'white', py: 2 }}>
        <div className="icon">
          <FacebookOutlinedIcon />
          <PinterestIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1">Emporio</Typography>
              <Typography variant="body2">info@emporio.com</Typography>
              <Typography variant="body2">+62812345678</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1">Shop</Typography>
              <Typography variant="body2">Men</Typography>
              <Typography variant="body2">Women</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1">Our Store</Typography>
              <Typography variant="body2">About Us</Typography>
              <Typography variant="body2">FAQ</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1">Terms & Conditions</Typography>
              <Typography variant="body2">Privacy Policies</Typography>
              <Typography variant="body2">Payment Methods</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <h5>© Emperio Clothing & Apparels | All Rights Reserved</h5>
    </div>
  );
};

export default Footer;
