import React, { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Alert, Button, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Cart() {
  const { items ,removeFromCart } = useCart();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    // Calculate the total sum using the reduce function
    const totalSum = items.reduce((accumulator, item) => accumulator + item.price, 0);
    setSum(totalSum);
  }, [items]);

  return (
    <div>
      {items.length < 1 ? (
        <Alert status="warning">You have no items in your cart!</Alert>
      ) : (
        <ul>
          {items.map((item) => (
            <Link to={`/products/${item._id}`} key={item._id}>
              <li>
                {item.title} - {item.price} TL
                <Image htmlWidth={200} src={item.photos[0]}></Image>
                <Button colorScheme="purple" mt={4} onClick={(e) =>{ e.preventDefault(); removeFromCart(item._id)}} >
                  Remove from Cart
                </Button>
              </li>
            </Link>
          ))}
        </ul>
      )}

      <Box mt={10}>Total: {sum} TL</Box>
    </div>
  );
}

export default Cart;
