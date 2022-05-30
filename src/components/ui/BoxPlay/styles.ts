import styled from 'styled-components';

import BoxTop from '@/assets/images/general/box-top.gif';
import BoxBottom from '@/assets/images/general/box-bottom.gif';
import Artwork from '@/assets/images/general/tibia-logo-artwork.gif';

import Chain from '@/assets/images/borders/chain.gif';
import LoginBoxBackground from '@/assets/images/loginbox/loginbox-background.gif';
import { FondamentoTitle } from '../shared/Typography';

export const BoxPlayWrapper = styled.div`
  display: grid;
  grid-template-rows: 12px max-content 12px;
  margin-top: -3px;
  position: relative;
`;

export const LogoArtwork = styled.span`
  position: absolute;
  background-image: ${`url(${Artwork.src})`};
  background-repeat: no-repeat;
  width: 196px;
  height: 158px;
  top: -153px;
  left: -10px;
  cursor: pointer;
`;

type BoxPlayBorderProps = {
  bottom?: boolean;
};

export const BoxPlayBorder = styled.div<BoxPlayBorderProps>`
  background-image: ${({ bottom }) =>
    `url(${bottom ? BoxBottom.src : BoxTop.src})`};
`;

export const BoxPlayContent = styled.div`
  height: max-content;
  background-image: ${`url(${LoginBoxBackground.src})`};
  background-repeat: repeat;
  margin: 0 5px 0;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4px;
`;

interface BoxPlayContentBorderProps {
  right?: boolean;
}

export const BoxPlayContentBorder = styled.div<BoxPlayContentBorderProps>`
  background: ${`url(${Chain.src})`};
  width: 7px;
  position: absolute;
  height: 100%;
  right: ${({ right }) => (right ? 0 : null)};
  left: ${({ right }) => (!right ? 0 : null)};
  background-repeat: repeat-y;
`;
