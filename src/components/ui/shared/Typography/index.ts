import styled from 'styled-components';

export const FondamentoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary.default};
  font-family: ${({ theme }) => theme.typography.fontsFamily.fondamento};
  text-shadow: -1px -1px 0 ${({ theme }) => theme.defaultColors.black},
    1px -1px 0 ${({ theme }) => theme.shadows.primary.default},
    -1px 1px 0 ${({ theme }) => theme.defaultColors.black},
    1px 1px 0 ${({ theme }) => theme.defaultColors.black};
`;

export const FondamentoSubtitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary.default};
  font-family: ${({ theme }) => theme.typography.fontsFamily.fondamento};
`;

export const FondamentoText = styled.p`
  color: ${({ theme }) => theme.colors.primary.default};
  font-family: ${({ theme }) => theme.typography.fontsFamily.fondamento};
`;
