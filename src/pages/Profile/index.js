import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Button, Text } from '@chakra-ui/react';

function Profile() {
    const {user, logout} =useAuth();
    
    const handleLogout =async () => {
        logout();
    };

  return (
    <div>
        <Text fontWeight={"bold"} fontSize={"20"}>Profile</Text>
      <code>
        {JSON.stringify(user)}
      </code>
      <br>
      </br>
      <Button colorScheme='purple' variant={"solid"} onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Profile
