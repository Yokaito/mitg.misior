import styled from 'styled-components';

export const FondamentoTitle = styled.h1`
  color: ${({ theme }) => theme.textColors.primary};
  font-family: 'Fondamento';
  text-shadow: -1px -1px 0 ${({ theme }) => theme.defaultColors.black},
    1px -1px 0 ${({ theme }) => theme.shadows.primary},
    -1px 1px 0 ${({ theme }) => theme.defaultColors.black},
    1px 1px 0 ${({ theme }) => theme.defaultColors.black};
`;

export const FondamentoSubtitle = styled.h2`
  color: ${({ theme }) => theme.textColors.primary};
  font-family: 'Fondamento';
`;

export const FondamentoText = styled.p`
  color: ${({ theme }) => theme.textColors.primary};
  font-family: 'Fondamento';
`;
