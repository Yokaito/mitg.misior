import styled from 'styled-components';

import { BoxProps } from '.';

export const BoxWrapper = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #3a3738;
  border-left: 2px solid #3a3738;
  background-color: #debb9d;
  z-index: 0;
`;

type ContentProps = Pick<BoxProps, 'padding'>;

export const ContentWrapper = styled.div<ContentProps>`
  border: 1px solid #793d03;
  background-color: #fff1da;
  padding: ${({ padding }) =>
    padding === `minimal` ? `.3rem` : padding === `normal` ? `.6rem` : `.9rem`};
  margin: 0.4rem 0.25rem 0.25rem;
`;
