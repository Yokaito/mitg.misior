import styled from 'styled-components';

import Plus from '@/assets/images/helpers/plus.gif';
import Minus from '@/assets/images/helpers/minus.gif';

import Community from '@/assets/images/icons/16/community.gif';
import Technical from '@/assets/images/icons/16/technical.gif';
import Development from '@/assets/images/icons/16/development.gif';

type TicketItemProps = {
  isActive: boolean;
};

export const TickerItemWrapper = styled.div<TicketItemProps>`
  display: grid;
  height: ${({ isActive }) => (isActive ? `max-content` : `19px`)};
  overflow: ${({ isActive }) => (isActive ? `visible` : `hidden`)};
  background-color: transparent;
  grid-template-columns: 16px 6rem auto 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.textColors.quaternary};
`;

export const TickerDate = styled.div`
  height: 100%;
  display: grid;
  place-self: center;
  margin-left: 0.3rem;
  line-height: 1.5;
  text-transform: capitalize;
`;

export const TickerText = styled.div<TicketItemProps>`
  height: 100%;
  text-align: justify;
  margin-top: 0.05rem;
  white-space: ${({ isActive }) => (isActive ? `pre-wrap` : `nowrap`)};

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TickerShow = styled.div<TicketItemProps>`
  background-image: ${({ isActive }) =>
    isActive ? `url(${Minus.src})` : `url(${Plus.src})`};
  height: 12px;
  width: 12px;
  margin-top: 3px;
  display: grid;
  place-self: start center;
`;

interface IconsImgProps {
  [key: string]: string;
}

const Icons: IconsImgProps = {
  community: Community.src,
  technical: Technical.src,
  development: Development.src,
};

type IconProps = {
  icon: string;
};

export const TickerIcon = styled.div<IconProps>`
  height: 16px;
  width: 16px;
  background-image: url(${({ icon }) => Icons[icon]});
  display: grid;
  place-self: start;
`;
