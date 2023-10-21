import React from 'react'
import Card from "../../components/Card";
import {Box, Flex, Grid, Button } from '@chakra-ui/react'
import {
  useInfiniteQuery
} from 'react-query'
import { fetchProductList } from '../api'; 

function Products() {

    const { error, data, fetchNextPage, hasNextPage,
      isFetching, isFetchingNextPage,status } = useInfiniteQuery("products", fetchProductList, {
        getNextPageParam:(lastGroup, allGroups) =>{
          const morePagesExist= lastGroup?.length ===12;
          if(!morePagesExist){
            return;
          }
          return allGroups.length +1;
        },
      }
);
  
    if (status==="loading") return 'Loading...'
  
    if (status==="error") return 'An error has occurred: ' + error.message


  return (
    <div>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          {data.pages.map((group,i) =>(
            <React.Fragment key={i}>
              {group.map((item) => (
                <Box w={"100%"} key={item._id}>
                  <Card item={item}></Card>
                </Box>
              ))
              }
            </React.Fragment>
          ))}
        </Grid>

        <Flex justifyContent="center">
          <Button onClick={() => fetchNextPage()}
           isLoading={isFetchingNextPage} isDisabled={!hasNextPage || isFetchingNextPage}>
            {
              isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              :"Nothing more"
            }
          </Button>
         </Flex>
    </div>
  )
}

export default Products
