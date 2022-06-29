import * as Yup from 'yup';
import { Field, FormikProvider, useFormik } from 'formik';
import { InputFormik } from '@/components/ui/InputFormik';
import * as S from './styles';

type AccountCreate = {
  accountName: string;
  email: string;
  password: string;
  samePassword: string;
  checkbox: boolean;
};

const CreateAccountSchema = Yup.object().shape({
  accountName: Yup.string()
    .min(3, `Mínimo 3 caracteres`)
    .max(15, `Máximo 50 caracteres`)
    .required(`Campo obrigatório`),
  email: Yup.string()
    .min(3, `Mínimo 3 caracteres`)
    .max(50, `Máximo 50 caracteres`)
    .required(`Email Obrigatório`)
    .email(`Email Invalido`),
  password: Yup.string()
    .min(6, `Mínimo 6 caracteres`)
    .max(50, `Máximo 50 caracteres`)
    .required(`Senha Obrigatória`),

  samePassword: Yup.string()
    .required(`Confirme a senha`)
    .when(`password`, {
      is: (val: any) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref(`password`)], `As senhas não conferem`),
    }),
  checkbox: Yup.boolean()
    .default(false)
    .oneOf([true], `Confirme que leu os termos`),
});

const initialValues: AccountCreate = {
  accountName: ``,
  email: ``,
  password: ``,
  samePassword: ``,
  checkbox: false,
};

const handleSubmit = (values: AccountCreate) => {
  console.log(CreateAccountSchema.isValidSync(values));

  console.log(values);
};

export const CreateAccountForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: CreateAccountSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <FormikProvider value={formik}>
        <S.FormikFormStyled>
          <InputFormik
            label="Account"
            id="accountName"
            name="accountName"
            showLabel
            key="accountName"
          />
          <InputFormik
            label="Email"
            id="email"
            name="email"
            showLabel
            key="email"
          />
          <InputFormik
            label="Password"
            id="password"
            name="password"
            showLabel
            type="password"
            key="password"
          />
          <InputFormik
            label="Confirm Password"
            id="samePassword"
            name="samePassword"
            showLabel
            type="password"
            key="samePassword"
          />
          <Field type="checkbox" name="checkbox" id="checkbox" />
          <button type="submit">Submit</button>
        </S.FormikFormStyled>
      </FormikProvider>
    </>
  );
};

export default CreateAccountForm;
