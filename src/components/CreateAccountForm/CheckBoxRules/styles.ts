import styled from 'styled-components';

export const CheckBox = styled.input`
  background-color: #fff;
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 0em;
  transform: translateY(-0.075em);
`;

export const CheckBoxError = styled.span`
  font-family: ${({ theme }) => theme.typography.fontsFamily.martel};
  font-size: ${({ theme }) => theme.typography.text.small};
  color: ${({ theme }) => theme.colors.quaternary.default};
`;

export const CheckBoxWithText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CheckBoxLabel = styled.label`
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-family: ${({ theme }) => theme.typography.fontsFamily.martel};
  font-size: ${({ theme }) => theme.typography.text.small};
  color: ${({ theme }) => theme.colors.quaternary.default};
`;

export const CheckBoxText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-family: ${({ theme }) => theme.typography.fontsFamily.martel};
  font-size: ${({ theme }) => theme.typography.text.small};
  color: ${({ theme }) => theme.colors.quaternary.default};
`;

export const TermsAndConditions = styled.span`
  font-family: ${({ theme }) => theme.typography.fontsFamily.martel};
  display: flex;
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.system.info};
  font-size: ${({ theme }) => theme.typography.text.small};
  cursor: pointer;
  transition: text-decoration 0.9s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

type CheckboxFormikWrapperProps = {
  containError?: boolean;
  showError?: boolean;
};

export const CheckboxFormikWrapper = styled.div<CheckboxFormikWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  ${CheckBoxError} {
    color: ${({ containError, showError, theme }) =>
      showError
        ? containError
          ? `${theme.system.error}`
          : `${theme.system.success}`
        : null};
  }
`;
