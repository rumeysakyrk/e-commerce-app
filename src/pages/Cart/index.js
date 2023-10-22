import React, { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import {
    Alert, Button, Image, Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure,
    FormControl,
    FormLabel,
    Textarea,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { fetchOrder } from '../api';

function Cart() {
    const { items, removeFromCart ,emptyCart} = useCart();
    const [address, setAddress] = useState();
    const [sum, setSum] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleSubmit = async () => {
        const itemIds = items.map((item) => item._id);
        const input = {
            address,
            items: JSON.stringify(itemIds)
        }

        await fetchOrder(input);
        emptyCart();
        onClose();



    }

    useEffect(() => {
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
                                <Button colorScheme="purple" mt={4} onClick={(e) => { e.preventDefault(); removeFromCart(item._id) }} >
                                    Remove from Cart
                                </Button>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}

            

            {items.length > 0 && (<> <Box mt={10}>Total: {sum} TL</Box> <Button onClick={onOpen} colorScheme='pink'>Order</Button> </>) }


            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Order</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Textarea placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => handleSubmit()}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </div>
    );
}

export default Cart;
