import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Skeleton } from '@mui/material';
import axios from 'axios';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    // Mengambil data dari API menggunakan Axios
    axios
      .get('https://sistemtoko.com/public/demo/product')
      .then((response) => {
        // Menyimpan data yang diterima dari API ke dalam state
        const newProductData = response.data.aaData;
        setProductData((prevProductData) => {
          // Filter item yang sudah ada dalam state
          const uniqueItems = newProductData.filter((newItem) => {
            return !prevProductData.some((prevItem) => prevItem.id === newItem.id);
          });
          return [...prevProductData, ...uniqueItems];
        });
        setLoading(false); // Set loading menjadi false setelah data diterima
      })
      .catch((error) => {
        console.error('Error fetching data from API: ', error);
      });
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="product-card-container">
      {loading
        ? // Menampilkan 4 Skeleton loading jika data belum diambil
          [1, 2, 3, 4].map((skeletonIndex) => (
            <Card key={skeletonIndex} sx={{ width: 345 }}>
              <Skeleton variant="rect" width={345} height={280} animation="wave" />
              <CardContent>
                <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={20} width="80%" style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={20} width="60%" />
              </CardContent>
            </Card>
          ))
        : // Menampilkan daftar kartu produk jika data sudah tersedia
          productData.map((product) => (
            <Card key={product.id} sx={{ width: 345 }}>
              <Link to={`/detail/${product.id}`}>
                <CardMedia component="img" height="140" image={product.photo} alt={product.name} />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Harga: {product.currency} {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stok: {product.stock}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => addToCart(product)}>
                  <AddShoppingCartIcon />
                </Button>
              </CardActions>
            </Card>
          ))}
    </div>
  );
}
