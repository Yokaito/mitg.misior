import styled from 'styled-components';
import { TickerItemWrapper } from './TickerItem/styles';

export const NewstickerWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  font-size: 12px;

  ${TickerItemWrapper}:first-child {
    background-color: ${({ theme }) => theme.backgrounds.tertiary} !important;
  }

  ${TickerItemWrapper}:nth-child(odd) {
    background-color: ${({ theme }) => theme.backgrounds.septenary};
  }
`;
