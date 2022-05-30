import styled from 'styled-components';

import Button from '@/assets/images/shared/button/button.png';
import ButtonHover from '@/assets/images/shared/button/button-hover.png';
import ButtonExtend from '@/assets/images/shared/button/button-extend.png';
import ButtonExtendHover from '@/assets/images/shared/button/button-extend-hover.png';
import { FondamentoTitle } from '../shared/Typography';

import { ButtonProps } from '.';

type ButtonWrapperProps = Pick<ButtonProps, 'extend'>;

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  background-image: ${({ extend }) =>
    extend ? `url(${ButtonExtend.src})` : `url(${Button.src})`};
  background-repeat: no-repeat;
  height: 34px;
  cursor: pointer;
  position: relative;
  width: ${({ extend }) => (extend ? `150px` : `142px`)};
  display: grid;
  place-content: center;
  transition: transform 100ms ease-in-out;

  :hover {
    background-image: ${({ extend }) =>
      extend ? `url(${ButtonExtendHover.src})` : `url(${ButtonHover.src})`};
  }
`;

export const ButtonText = styled(FondamentoTitle)`
  user-select: none;
  white-space: nowrap;
  word-wrap: break-word;
  overflow: hidden;
  margin: 0 0.7rem;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.02rem;
`;
