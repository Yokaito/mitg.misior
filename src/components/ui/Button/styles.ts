import styled from 'styled-components';

import Button from '@/assets/images/shared/button/button.png';
import ButtonExtend from '@/assets/images/shared/button/button-extend.png';
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
  transition: all 100ms ease-in-out;

  :hover {
    filter: brightness(1.1) contrast(1.1) saturate(1.1);
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
