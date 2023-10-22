import React from 'react'
import { useParams } from 'react-router-dom'
import {
    useQuery
  } from 'react-query'
  import { fetchProductDetail } from '../api';
import ReactImageGallery from 'react-image-gallery';
import { Button, Box } from '@chakra-ui/react';
import  moment  from 'moment'
import { useCart } from '../../contexts/CartContext';


function ProductDetail() {
    const { product_id } = useParams();
    const {addToCart} =useCart();


    const { isLoading, error, data } = useQuery({
        queryKey: ['product', product_id],
        queryFn: () =>
        fetchProductDetail(product_id)
      })
    
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
  
  console.log("data", data);
  const images = data.photos.map((url)=> ({original:url, thumbnail:url}))
  return (
    <div>
      <ReactImageGallery items={images} thumbnailPosition='left'>

</ReactImageGallery>
      <Button mt={"20px"} colorScheme='purple' onClick={() => addToCart(data)}>Add to Cart</Button>
      
      <Box mt={"10px"} as="h1" fontWeight={"bold"} >{data.title}</Box>
      <Box mt={"10px"} d="plex" alignItems={"baseline"}>
                    {moment(data.createdAt).format("DD/MM/YYYY")}
                </Box>
                <Box mt={"10px"} as="h1" fontWeight={"semibold"} >{data.description}</Box>

      
    </div>
  )
}

export default ProductDetail
