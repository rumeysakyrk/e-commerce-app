import * as yup from 'yup';

let validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password')]).required()

  });

  export default validations