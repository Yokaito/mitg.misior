import styled from 'styled-components';
import { FondamentoTitle } from '../ui/shared/Typography';

export const LoginBoxText = styled(FondamentoTitle)`
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  user-select: none;
  white-space: nowrap;
  word-wrap: break-word;
  overflow: hidden;
  cursor: pointer;

  transition: all 30ms ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;
