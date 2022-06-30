import styled from 'styled-components';
import { Field, Form } from 'formik';

type InputWrapperProps = {
  hasError: boolean;
};

export const InputWrapper = styled(Field)<InputWrapperProps>`
  border: ${({ hasError }) => (hasError ? `1px solid red` : `1px solid #ccc`)};
  width: 100%;
  font-size: ${({ theme }) => theme.typography.text.small};
  padding: 6px;
`;

export const FormikFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
