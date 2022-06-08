import styled from 'styled-components';
import { Field } from 'formik';

type InputWrapperProps = {
  hasError: boolean;
};

export const InputWrapper = styled(Field)<InputWrapperProps>`
  border: ${({ hasError }) => (hasError ? `1px solid red` : `1px solid #ccc`)};
  width: 100%;
  font-size: 0.9rem;
  padding: 6px;
`;
