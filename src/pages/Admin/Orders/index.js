import React from 'react'
import { fetchOrderList } from '../../api'
import { useQuery } from 'react-query'
import { Table, TableCaption, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'

function Orders() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['order'],
        queryFn: () =>
            fetchOrderList()
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    console.log("data", data);
    return (
        <div>
            <Text fontSize={"2xl"} p={5} fontWeight={"bold"}>
                Orders
            </Text>

            <Table variant={"simple"}>
                <TableCaption>
                    Order Details
                </TableCaption>
                <Thead>
                    <Tr>
                        <Td fontWeight={"semibold"}>
                            User
                        </Td>
                        <Td fontWeight={"semibold"}>
                            Address
                        </Td>
                        <Td fontWeight={"semibold"}>
                            Items
                        </Td>
                    </Tr>

                </Thead>
                <Tbody>
                    {data.map((item) => (
                        <Tr key={item._id}>
                            <Td>
                                {item.user.email}
                            </Td>
                            <Td>
                                {item.adress}
                            </Td>
                            <Td>
                                {item.items.length}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    )
}

export default Orders
