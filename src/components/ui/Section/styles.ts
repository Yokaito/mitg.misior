import styled from 'styled-components';

import BackgroundGreen from '@/assets/images/section/title-background-green.gif';
import BackgroundBlue from '@/assets/images/section/title-background-blue.png';
import BackgroundCyan from '@/assets/images/section/title-background-cyan.gif';
import BackgroundDark from '@/assets/images/section/title-background-dark.gif';
import BackgroundBrown from '@/assets/images/section/title-background-brown.gif';
import BackgroundRed from '@/assets/images/section/title-background-red.gif';

import { SectionProps } from '.';
import { FondamentoTitle } from '../shared/Typography';

export const SectionWrapper = styled.section`
  height: max-content;
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${({ theme }) => theme.borders.primary.default};
  border-left: 2px solid ${({ theme }) => theme.borders.primary.default};
  background-color: #debb9d;
  z-index: 0;
`;

type ContentProps = Pick<SectionProps, 'padding'>;

const sectionContentWrapperPadding = ({ padding }: ContentProps) => {
  if (padding === `minimal`) {
    return `.3rem`;
  }

  if (padding === `normal`) {
    return `.6rem`;
  }

  return `.9rem`;
};

export const SectionContentWrapper = styled.div<ContentProps>`
  border: 1px solid ${({ theme }) => theme.borders.secondary.default};
  background-color: ${({ theme }) => theme.backgrounds.primary.default};
  padding: ${({ padding }) => sectionContentWrapperPadding({ padding })};
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

export interface SectionHeaderProps {
  typeBackground?: 'green' | 'blue' | 'dark' | 'brown' | 'red' | 'cyan';
}

export const SectionHeader = styled.div<SectionHeaderProps>`
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

export const SectionTitle = styled(FondamentoTitle)`
  margin-left: 1rem;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  font-size: ${({ theme }) => theme.typography.text.large};
  user-select: none;
  text-transform: capitalize;
`;
