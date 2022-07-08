import styled from 'styled-components';
import {
  FondamentoSubtitle,
  FondamentoText,
  FondamentoTitle,
} from '../ui/shared/Typography';

export const PageNotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const PageNotFoundTitle = styled(FondamentoTitle)`
  color: ${({ theme }) => theme.system.info};
  font-size: ${({ theme }) => theme.typography.title.h1};
`;

export const PageNotFoundSubtitle = styled(FondamentoSubtitle)`
  font-family: ${({ theme }) => theme.typography.fontsFamily.poppins};
  color: ${({ theme }) => theme.colors.quaternary.default};
  font-size: ${({ theme }) => theme.typography.title.h6};
`;

export const PageNotFoundText = styled(FondamentoText)`
  font-family: ${({ theme }) => theme.typography.fontsFamily.poppins};
  color: ${({ theme }) => theme.colors.quaternary.default};
  font-size: ${({ theme }) => theme.typography.text.large};
  max-width: 65%;
  text-align: center;
`;
