import * as yup from 'yup';

const FormSchema = yup.object().shape({
  firstName: yup.string().required(),
  middleName: yup.string(),
  lastName: yup.string().required(),
  suffix: yup.string(),
});

export default FormSchema;
