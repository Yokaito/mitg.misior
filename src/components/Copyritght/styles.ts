import styled from 'styled-components';

export const CopyRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2px;
`;

export const CopyRightTitle = styled.p`
  color: ${({ theme }) => theme.defaultColors.white};
  font-size: ${({ theme }) => theme.typography.text.xxxsmall};
`;

export const CopyRightCreator = styled.p`
  a {
    color: ${({ theme }) => theme.defaultColors.white};
    font-size: ${({ theme }) => theme.typography.text.xxxsmall};
  }
`;

export const CopyRightText = styled.p`
  color: ${({ theme }) => theme.defaultColors.white};
  font-size: ${({ theme }) => theme.typography.text.xxxsmall};
`;
