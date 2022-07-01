import * as Yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import { InputFormik } from '@/components/ui/InputFormik';
import { CheckBoxRulesFormik } from './CheckBoxRules';
import * as S from './styles';
import useTranslation from '@/sdk/hooks/useTranslation';
import InnerContainer from '@/components/ui/shared/InnerContainer';
import ButtonForm from '../ui/ButtonForm';
import { otConfigs } from '@/misior';

type AccountCreate = {
  accountName: string;
  email: string;
  password: string;
  samePassword: string;
  checkbox: boolean;
};

const initialValues: AccountCreate = {
  accountName: ``,
  email: ``,
  password: ``,
  samePassword: ``,
  checkbox: false,
};

export const CreateAccountForm = () => {
  const { t } = useTranslation();

  const CreateAccountSchema = Yup.object().shape({
    accountName: Yup.string()
      .min(3, t(`validation/minLength`, 3))
      .max(15, t(`validation/maxLength`, 15))
      .required(t(`createAccount/accountNameRequired`)),
    email: Yup.string()
      .min(3, t(`validation/minLength`, 3))
      .max(50, t(`validation/maxLength`, 50))
      .required(t(`createAccount/emailRequired`))
      .email(t(`createAccount/emailInvalid`)),
    password: Yup.string()
      .min(6, t(`validation/minLength`, 6))
      .max(50, t(`validation/maxLength`, 50))
      .required(t(`createAccount/passwordRequired`)),

    samePassword: Yup.string()
      .required(t(`createAccount/confirmPasswordRequired`))
      .when(`password`, {
        is: (val: any) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref(`password`)],
          t(`createAccount/confirmPasswordInvalid`),
        ),
      }),
    checkbox: Yup.boolean()
      .default(false)
      .oneOf([true], t(`createAccount/readTermsRequired`)),
  });

  const handleSubmit = (values: AccountCreate) => {
    console.log(CreateAccountSchema.isValidSync(values));

    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: CreateAccountSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <FormikProvider value={formik}>
        <S.FormikFormStyled>
          <InnerContainer>
            <S.FormikFormWrapper>
              <InputFormik
                label={t(`createAccount/accountName`)}
                id="accountName"
                name="accountName"
                showLabel
                key="accountName"
              />
              <InputFormik
                label={t(`createAccount/email`)}
                id="email"
                name="email"
                showLabel
                key="email"
                autoComplete="email"
              />
              <InputFormik
                label={t(`createAccount/password`)}
                id="password"
                name="password"
                showLabel
                type="password"
                key="password"
                autoComplete="new-password"
              />
              <InputFormik
                label={t(`createAccount/confirmPassword`)}
                id="samePassword"
                name="samePassword"
                showLabel
                type="password"
                key="samePassword"
                autoComplete="new-password"
              />
            </S.FormikFormWrapper>
          </InnerContainer>
          <InnerContainer>
            <CheckBoxRulesFormik
              name="checkbox"
              id="checkbox"
              label={t(`createAccount/readTerms`)}
              showLabel
              terms={t(`createAccount/createTermsText`)}
              termsWithStyle={`${otConfigs.server.worldName}`}
              urlToTerms="/terms"
            />
          </InnerContainer>
          <InnerContainer>
            <S.FormikButtonSubmitWrapper>
              <ButtonForm extend>Submit</ButtonForm>
            </S.FormikButtonSubmitWrapper>
          </InnerContainer>
        </S.FormikFormStyled>
      </FormikProvider>
    </>
  );
};

export default CreateAccountForm;
