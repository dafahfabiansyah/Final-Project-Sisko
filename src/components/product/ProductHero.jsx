import React from 'react';
import { Grid, Typography, Button, Paper } from '@mui/material';
// import image from '../../assets/image/slider/slide-1.png';
import '../index.css';

const HeroSection = () => {
  return (
    <Grid className="container">
      {/* Bagian kiri dengan judul, deskripsi, dan tombol */}
      <Grid item xs={6}>
        <div>
          <Typography variant="h4" gutterBottom className="product-title">
            Start Your Day With a Fresh New Look
          </Typography>
          {/* <Typography variant="body1" className="product-desc">
            Deskripsi Produk yang panjangnya bisa disesuaikan dengan kebutuhan Anda. Deskripsi ini bisa mencakup informasi tentang produk Anda.
          </Typography> */}
          <Button variant="contained" color="primary" href="/detail/:id" className="product-button">
            Shop Now
          </Button>
        </div>
      </Grid>
      {/* Bagian kanan dengan gambar */}
      <Grid item xs={6}>
        <img className="product-image" />
        {/* <Paper elevation={3}>
        </Paper> */}
      </Grid>
    </Grid>
  );
};

export default HeroSection;
