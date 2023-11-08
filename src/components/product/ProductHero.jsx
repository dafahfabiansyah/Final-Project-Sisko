import React from 'react';
import { Grid, Typography, Button, Paper } from '@mui/material';
// import image from '../../assets/image/slider/slide-1.png';

const HeroSection = () => {
  const heroStyle = {
    // background: 'linear-gradient(90deg, rgba(68, 205, 70, 0.577468487394958) 0%, rgba(165, 186, 17, 0.835171568627451) 35%)',
    padding: '2rem',
    zIndex: 1,
  };

  return (
    <Grid container spacing={3} style={heroStyle}>
      {/* Bagian kiri dengan judul, deskripsi, dan tombol */}
      <Grid item xs={6}>
        <div>
          <Typography variant="h3" gutterBottom>
            Judul Produk
          </Typography>
          <Typography variant="body1">Deskripsi Produk yang panjangnya bisa disesuaikan dengan kebutuhan Anda. Deskripsi ini bisa mencakup informasi tentang produk Anda.</Typography>
          <Button variant="contained" color="primary" href="/">
            Beli Sekarang
          </Button>
        </div>
      </Grid>
      {/* Bagian kanan dengan gambar */}
      <Grid item xs={6}>
        <Paper elevation={3}>
          <img src="../../assets/image/slider/slide-1.png" style={{ width: '100%', height: '100%' }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
