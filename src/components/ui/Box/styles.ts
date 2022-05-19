import styled from 'styled-components';

import BackgroundGreen from '@/assets/images/box/title-background-green.gif';
import BackgroundBlue from '@/assets/images/box/title-background-blue.png';
import BackgroundCyan from '@/assets/images/box/title-background-cyan.gif';
import BackgroundDark from '@/assets/images/box/title-background-dark.gif';
import BackgroundBrown from '@/assets/images/box/title-background-brown.gif';
import BackgroundRed from '@/assets/images/box/title-background-red.gif';

import { BoxProps } from '.';
import { Fondamento } from '../shared/Typography';

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

export const BoxContentWrapper = styled.div<ContentProps>`
  border: 1px solid #793d03;
  background-color: #fff1da;
  padding: ${({ padding }) =>
    padding === `minimal` ? `.3rem` : padding === `normal` ? `.6rem` : `.9rem`};
  margin: 0.4rem 0.25rem 0.25rem;
`;

type BackgroundProps = {
  [key: string]: {
    img: string;
    height: string;
  };
};

const Backgrounds: BackgroundProps = {
  green: {
    img: BackgroundGreen.src,
    height: `1.5rem`,
  } /* 24 */,
  blue: {
    img: BackgroundBlue.src,
    height: `1.75rem`,
  } /* 28 */,
  dark: {
    img: BackgroundDark.src,
    height: `1.5rem`,
  } /* 24 */,
  brown: {
    img: BackgroundBrown.src,
    height: `1.5rem`,
  } /* 24 */,
  red: {
    img: BackgroundRed.src,
    height: `1.75rem`,
  } /* 28 */,
  cyan: {
    img: BackgroundCyan.src,
    height: `1.75rem`,
  } /* 28 */,
};

export interface BoxHeaderProps {
  typeBackground?: 'green' | 'blue' | 'dark' | 'brown' | 'red' | 'cyan';
}

export const BoxHeader = styled.div<BoxHeaderProps>`
  height: ${({ typeBackground }) =>
    typeBackground
      ? Backgrounds[typeBackground].height
      : Backgrounds.green.height};

  background-image: ${({ typeBackground }) =>
    typeBackground
      ? `url(${Backgrounds[typeBackground].img})`
      : `url(${Backgrounds.green.img})`};
  background-repeat: repeat-x;
  box-shadow: 0 0 5px black;
`;

export const Title = styled(Fondamento)`
  margin-left: 1rem;
  font-weight: 400;
  font-size: 1.25rem;
  user-select: none;
  text-transform: capitalize;
`;
