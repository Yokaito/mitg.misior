import styled from 'styled-components';

export const Fondamento = styled.div`
  color: ${({ theme }) => theme.textColors.primary};
  font-family: 'Fondamento';
  text-shadow: -1px -1px 0 ${({ theme }) => theme.defaultColors.black},
    1px -1px 0 ${({ theme }) => theme.shadows.primary},
    -1px 1px 0 ${({ theme }) => theme.defaultColors.black},
    1px 1px 0 ${({ theme }) => theme.defaultColors.black};
`;
