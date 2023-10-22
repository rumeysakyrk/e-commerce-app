import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Text } from '@chakra-ui/react';

function Profile() {
    const {user} =useAuth();
  return (
    <div>
        <Text fontWeight={"bold"} fontSize={"20"}>Profile</Text>
      <code>
        {JSON.stringify(user)}
      </code>
    </div>
  )
}

export default Profile
