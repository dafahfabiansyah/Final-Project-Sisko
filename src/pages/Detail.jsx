import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Detail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://sistemtoko.com/public/demo/single/${id}`)
      .then((response) => {
        setProductDetail(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from API: ', error);
      });
  }, [id]);

  return (
    <div>
      {productDetail && (
        <div>
          <image>{productDetail.product_img}</image>
          <h1>{productDetail.title}</h1>
          <p>{productDetail.description}</p>
          {/* Tampilkan informasi detail produk sesuai dengan data dari API */}
        </div>
      )}
    </div>
  );
}
