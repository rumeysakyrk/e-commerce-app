import React from 'react'
import { Button, Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import  moment  from 'moment'
import { useCart } from '../../contexts/CartContext'

function Card({item}) {
    const {addToCart} = useCart();
  return (
    <Box borderWidth="1 px" borderRadius="lg" overflow="hidden" p={"3"}>
        <Link to={`/products/${item._id}`}>
            <Image src={item.photos[0]} alt='product' loading='lazy' />
            <Box p={"6"}>
                <Box d="plex" alignItems={"baseline"}>
                    {moment(item.createdAt).format("DD/MM/YYYY")}
                </Box>
                <Box mt={"1"} fontWeight={"semibold"} as='h4' lineHeight={"tight"}>
                    {item.title}
                </Box>
                <Box>
                    {item.price}
                </Box>
            </Box>
        </Link>
            <Button colorScheme='purple' onClick={() => addToCart(item)} >Add to Cart</Button>
    </Box>
  )
}

export default Card
