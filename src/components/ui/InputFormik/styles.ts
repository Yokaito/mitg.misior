import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  font-size: 0.9rem;
  padding: 6px 30px 6px 6px;
  outline: 0.1px solid ${({ theme }) => theme.textColors.quaternary};
`;

export const Label = styled.label`
  font-family: 'Martel';
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.quaternary};
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
  border: 1px solid ${({ theme }) => theme.backgrounds.quaternary};
  background-color: ${({ theme }) => theme.backgrounds.septenary};
  color: ${({ theme }) => theme.textColors.quaternary};
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
  font-family: 'Martel';
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.quaternary};
`;

type InputWrapperProps = {
  containError?: boolean;
  showError?: boolean;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  ${Input} {
    outline: ${({ containError, showError }) =>
      showError ? (containError ? `1px solid red` : `1px solid green`) : null};
  }

  ${Label} {
    color: ${({ containError, showError }) =>
      showError ? (containError ? `red` : `green`) : null};
  }
`;
