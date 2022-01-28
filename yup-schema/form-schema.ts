import * as yup from 'yup';

const FormSchema = yup.object().shape({
  firstName: yup.string().required('First name is required.'),
  middleName: yup.string(),
  lastName: yup.string().required('Last name is required.'),
  suffix: yup.string(),
});

export default FormSchema;
