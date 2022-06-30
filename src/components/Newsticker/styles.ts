import styled from 'styled-components';
import { TickerItemWrapper } from './TickerItem/styles';

export const NewstickerWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  font-size: ${({ theme }) => theme.typography.text.xsmall};

  ${TickerItemWrapper}:first-child {
    background-color: ${({ theme }) =>
      theme.backgrounds.tertiary.default} !important;
  }

  ${TickerItemWrapper}:nth-child(odd) {
    background-color: ${({ theme }) => theme.backgrounds.septenary.default};
  }
`;
