import styled from 'styled-components';

import CornerTr from '@/assets/images/corners/corner-tr.gif';
import CornerTl from '@/assets/images/corners/corner-tl.gif';
import CornerBl from '@/assets/images/corners/corner-bl.gif';
import CornerBr from '@/assets/images/corners/corner-br.gif';

import { CornerProps } from '.';

const getCornerSrc = ({ bottom, right }: CornerProps) => {
  if (bottom && right) {
    return `url(${CornerBr.src})`;
  }

  if (bottom && !right) {
    return `url(${CornerBl.src})`;
  }

  if (!bottom && right) {
    return `url(${CornerTr.src})`;
  }

  return `url(${CornerTl.src})`;
};

export const CornerWrapper = styled.div<CornerProps>`
  height: 17px;
  width: 17px;
  background-image: ${({ bottom, right }) => getCornerSrc({ bottom, right })};
  z-index: 9;
  position: absolute;
  background-repeat: no-repeat;
  right: ${({ right }) => (right ? `-5px` : `null`)};
  top: ${({ bottom }) => (bottom ? `-9px` : `-4px`)};
  left: ${({ right }) => (right ? `null` : `-5px`)};
`;
