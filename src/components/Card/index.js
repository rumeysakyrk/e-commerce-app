import React from 'react'
import { Button, Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import  moment  from 'moment'

function Card({item}) {
  return (
    <Box borderWidth="1 px" borderRadius="lg" overflow="hidden" p={"3"}>
        <Link to="#/">
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
            <Button colorScheme='purple' >Add to Card</Button>
    </Box>
  )
}

export default Card
