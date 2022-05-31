import styled from 'styled-components';

import BorderVertical from '@/assets/images/borders/box-frame-vertical.gif';
import BorderHorizontal from '@/assets/images/borders/box-frame-horizontal.gif';
import CornerImg from '@/assets/images/corners/box-frame-edge.gif';

export const CaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CaptionHeader = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.backgrounds.quaternary};
  grid-template-columns: 3px auto 3px;
  grid-template-rows: 4px minmax(15px, auto) 4px;
  grid-template-areas:
    'TT-TOP   TT-TOP     TT-TOP'
    'TT-LEFT  TT-TITLE   TT-RIGHT'
    'TT-BOT   TT-BOT     TT-BOT';
`;

export const CaptionTitle = styled.h2`
  margin: 3px 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.defaultColors.white};
  font-weight: 700;
  font-family: 'Martel';
  display: flex;
  align-items: center;
`;

interface BorderProps {
  area: string;
  vertical?: boolean;
}
export const CaptionBorder = styled.div<BorderProps>`
  grid-area: ${({ area }) => area};
  background-image: ${({ vertical }) =>
    vertical ? `url(${BorderVertical.src})` : `url(${BorderHorizontal.src})`};
  background-repeat: ${({ vertical }) => (vertical ? `repeat-y` : `repeat-x`)};
  position: relative;
`;

interface CornerProps {
  right?: boolean;
  bot?: boolean;
}

export const CaptionCorner = styled.div<CornerProps>`
  position: absolute;
  height: 5px;
  width: 5px;
  background-image: ${`url(${CornerImg.src})`};
  background-repeat: no-repeat;
  z-index: 9;
  top: ${({ bot }) => (!bot ? `-1px` : null)};
  bottom: ${({ bot }) => (bot ? `-1px` : null)};
  left: ${({ right }) => (!right ? `-1.2px` : null)};
  right: ${({ right }) => (right ? `-1.2px` : null)};
`;
