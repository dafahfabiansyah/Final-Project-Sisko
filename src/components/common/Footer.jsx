import React from 'react';
import { Container, Typography, Link, Grid, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">Tentang Kami</Typography>
            <Typography variant="body2">Deskripsi singkat tentang situs Anda atau perusahaan Anda.</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">Tautan Berguna</Typography>
            <Link href="/tentang-kami" color="inherit">
              Tentang Kami
            </Link>
            <Link href="/layanan" color="inherit">
              Layanan
            </Link>
            <Link href="/kontak" color="inherit">
              Kontak
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
