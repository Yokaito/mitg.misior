import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { InputFormik } from '@/components/ui/InputFormik';

type AccountCreate = {
  email: string;
};

const CreateAccountSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, `Too Short!`)
    .max(50, `Too Long!`)
    .required(`Required`)
    .email(`Invalid email`),
});

const initialValues: AccountCreate = {
  email: ``,
};

const handleSubmit = (values: AccountCreate) => {
  console.log(values);
};

export const CreateAccountForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateAccountSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputFormik label="Email" id="email" name="email" />
        </Form>
      </Formik>
    </>
  );
};

export default CreateAccountForm;
