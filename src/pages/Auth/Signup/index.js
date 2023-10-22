import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from '@chakra-ui/react'
import {useFormik} from "formik";
import validationSchema from './validations';
import {fetchRegister} from "../../api";
import { useAuth } from '../../../contexts/AuthContext';
import {useNavigate} from "react-router-dom";


function Signup() {
  const navigate = useNavigate();
  const {login} =useAuth();
  const formik = useFormik( {
    initialValues: {email: "", password: "", passwordConfirm: ""},

    onSubmit: async (values, bag) => {
      try {
        const registerResponse= await fetchRegister({
          email: values.email,
          password: values.password
        })
        login(registerResponse);
        navigate('/profile');
        console.log(registerResponse);
      } catch (e) {
        bag.setErrors({general: e.response.data.message});
      }
    },
    validationSchema,
 });
  return (
    <div>
      <Flex align={"center"} width={"full"} justifyContent={"center"}>
        <Box pt={10}>
          <Box textAlign={"center"}>
            <Heading>
              Sign up
            </Heading>
          </Box>
          <Box my={5} > {formik.errors.general && (<Alert status='errors' colorScheme='purple'>{formik.errors.general} </Alert>)}</Box>
          <Box my={5} textAlign={"left"}>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>
                 E-mail
                </FormLabel>
                <Input name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                isInvalid={formik.touched.email && formik.errors.email} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>
                 Password
                </FormLabel>
                <Input name='password' type='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} 
                isInvalid={formik.touched.password && formik.errors.password}/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>
                 Password Confirm
                </FormLabel>
                <Input name='passwordConfirm' type='password' value={formik.values.passwordConfirm} onChange={formik.handleChange} onBlur={formik.handleBlur}
                isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}/>
              </FormControl>
              <Button colorScheme='purple' width={"full"} mt={4} type='submit'>Sign Up</Button>
            </form>

          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signup
