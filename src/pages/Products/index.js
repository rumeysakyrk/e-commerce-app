import React from 'react'
import Card from "../../components/Card";
import {Grid } from '@chakra-ui/react'

function Products() {
  return (
    <div>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </Grid>
    </div>
  )
}

export default Products
