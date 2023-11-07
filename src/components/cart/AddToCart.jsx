import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../components/index.css';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

export default function AddToCart({ cart }) {
  return (
    <div className="cart-list">
      {cart.map((product) => (
        <Card key={product.id} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" component="div">
              Price: {product.currency} {product.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
