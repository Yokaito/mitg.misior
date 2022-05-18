import styled from 'styled-components';

import CornerTr from '@/assets/images/corners/corner-tr.gif';
import CornerTl from '@/assets/images/corners/corner-tl.gif';
import CornerBl from '@/assets/images/corners/corner-bl.gif';
import CornerBr from '@/assets/images/corners/corner-br.gif';

import { CornerProps } from '.';

export const CornerWrapper = styled.div<CornerProps>`
  height: 17px;
  width: 17px;
  background-image: ${({ right, bottom }) =>
    right
      ? `url(${bottom ? CornerBr.src : CornerTr.src})`
      : `url(${bottom ? CornerBl.src : CornerTl.src})`};
  z-index: 9;
  position: absolute;
  background-repeat: no-repeat;
`;
