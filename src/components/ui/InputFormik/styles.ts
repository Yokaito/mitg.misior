import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.typography.text.xsmall};
  padding: 6px 30px 6px 6px;
  outline: 0.1px solid ${({ theme }) => theme.colors.quaternary.default};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.typography.fontsFamily.martel};
  font-size: ${({ theme }) => theme.typography.text.small};
  color: ${({ theme }) => theme.colors.quaternary.default};
`;

export const InputWithFeedback = styled.div`
  position: relative;
  width: 100%;
`;

export const Feedback = styled.span`
  position: absolute;
  right: 10px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ToolTipText = styled.span`
  visibility: hidden;
  width: max-content;
  border: 1px solid ${({ theme }) => theme.backgrounds.quaternary.default};
  background-color: ${({ theme }) => theme.backgrounds.septenary.default};
  color: ${({ theme }) => theme.colors.quaternary.default};
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  bottom: -5px;
  left: 30px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
`;

export const ToolTipWrapper = styled.div`
  position: relative;

  &:hover {
    ${ToolTipText} {
      visibility: visible;
    }
  }
`;

export const ErrorFeedback = styled.span`
  font-family: ${({ theme }) => theme.typography.fontsFamily.martel};
  font-size: ${({ theme }) => theme.typography.text.small};
  color: ${({ theme }) => theme.colors.quaternary.default};
`;

type InputWrapperProps = {
  containError?: boolean;
  showError?: boolean;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  ${Input} {
    outline: ${({ containError, showError, theme }) =>
      showError
        ? containError
          ? `1px solid ${theme.system.error}`
          : `1px solid ${theme.system.success}`
        : null};
  }

  ${Label} {
    color: ${({ containError, showError, theme }) =>
      showError
        ? containError
          ? `${theme.system.error}`
          : `${theme.system.success}`
        : null};
  }
`;
