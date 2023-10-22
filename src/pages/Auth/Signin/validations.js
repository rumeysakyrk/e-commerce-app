import * as yup from 'yup';

let validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  export default validations