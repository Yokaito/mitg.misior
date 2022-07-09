import styled from 'styled-components';
import ButtonImg from '@/assets/images/shared/button/button.png';
import ButtonImgExtend from '@/assets/images/shared/button/button-extend.png';
import { FondamentoTitle } from '../shared/Typography';
import LoadingIcons from 'react-loading-icons';

import { ButtonFormProps } from '.';

type ButtonProps = Pick<ButtonFormProps, 'extend'>;

export const ButtonFormWrapper = styled.button<ButtonProps>`
  background-image: ${({ extend }) =>
    extend ? `url(${ButtonImgExtend.src})` : `url(${ButtonImg.src})`};
  background-repeat: no-repeat;
  height: 34px;
  cursor: pointer;
  position: relative;
  width: ${({ extend }) => (extend ? `150px` : `142px`)};
  display: grid;
  place-content: center;
  transition: all 100ms ease-in-out;
  filter: ${({ disabled }) => (disabled ? `grayscale(70%)` : `grayscale(0%)`)};
  cursor: ${({ disabled }) => (disabled ? `not-allowed` : `pointer`)};

  :hover {
    filter: ${({ disabled }) =>
      !disabled ? `brightness(1.1) contrast(1.1) saturate(1.1)` : null};
  }
`;

export const ButtonFormText = styled(FondamentoTitle)`
  display: flex;
`;

export const IconLoading = styled(LoadingIcons.SpinningCircles)`
  stroke: ${({ theme }) => theme.defaultColors.white};
`;
