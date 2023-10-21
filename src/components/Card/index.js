import React from 'react'
import { Button, Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <Box borderWidth="1 px" borderRadius="lg" overflow="hidden" p={"3"}>
        <Link to="#/">
            <Image src="https://picsum.photos/200/300" alt='product' />
            <Box p={"6"}>
                <Box d="plex" alignItems={"baseline"}>
                    Date:20/10/2023 
                </Box>
                <Box mt={"1"} fontWeight={"semibold"} as='h4' lineHeight={"tight"}>
                    Macbook Pro
                </Box>
                <Box>
                    54 000 TL
                </Box>
            </Box>
        </Link>
            <Button colorScheme='purple' >Add to Card</Button>
    </Box>
  )
}

export default Card
