import BackgroundGreen from '@/assets/images/section/title-background-green.gif';
import BackgroundBlue from '@/assets/images/section/title-background-blue.png';
import BackgroundCyan from '@/assets/images/section/title-background-cyan.gif';
import BackgroundDark from '@/assets/images/section/title-background-dark.gif';
import BackgroundBrown from '@/assets/images/section/title-background-brown.gif';
import BackgroundRed from '@/assets/images/section/title-background-red.gif';
import styled from 'styled-components';

export const TitleBackgroundBarWrapper = styled.section`
  height: max-content;
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${({ theme }) => theme.borders.primary.default};
  border-left: 2px solid ${({ theme }) => theme.borders.primary.default};
  background-color: ${({ theme }) => theme.backgrounds.secondary.default};
  z-index: 0;
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

export interface BackgroundBarProps {
  typeBackground?: 'green' | 'blue' | 'dark' | 'brown' | 'red' | 'cyan';
}

export const BackgroundBar = styled.div<BackgroundBarProps>`
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
