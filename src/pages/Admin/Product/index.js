import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { fetchProductList, deleteProduct } from '../../api'
import { Popconfirm, Table } from 'antd'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Product() {
  const { isLoading, error, data } = useQuery(
    'admin:products',
    fetchProductList
  )
  const queryClient= useQueryClient();
  const mutation = useMutation(
    deleteProduct
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log("data", data);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Link to={`/admin/products/${record._id}`}>Edit </Link>
          <Popconfirm title="Are you sure?" onConfirm={() => mutation.mutate(record._id,
            { onSuccess: () => { console.log("success"); queryClient.invalidateQueries('admin:products') } })}  >
            <a href='#!'> Delete</a></Popconfirm>
        </>
      )
    },
  ];

  return (
    <div>

      <Text fontSize={"2xl"} p={2}>
        Products
      </Text>

      <Table dataSource={data} columns={columns} rowKey={"_id"}>
      </Table>
    </div>
  )
}

export default Product
