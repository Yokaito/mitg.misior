import { motion } from 'framer-motion';
import styled from 'styled-components';
import Chain from '@/assets/images/borders/chain.gif';

export const MenuSubItemWrapper = styled(motion.li)`
  display: flex;
  background: ${({ theme }) => theme.backgrounds.octonary.default};
  height: max-content;
  min-height: 21px;
  border-bottom: 1px solid ${({ theme }) => theme.borders.quinary.default};

  :hover {
    background: ${({ theme }) => theme.backgrounds.octonary.lighten};
  }
`;

export const MenuSubItemContent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 7px;
  position: relative;
  width: 100%;
`;

type MenuSubItemBorderProps = {
  right?: boolean;
};

export const MenuSubItemBorder = styled.div<MenuSubItemBorderProps>`
  left: ${({ right }) => (right ? `unset` : `-3.5px`)};
  right: ${({ right }) => (right ? `-3px` : `unset`)};
  position: absolute;
  background: ${`url(${Chain.src})`};
  background-repeat: repeat-y;

  height: 24px;
  width: 7px;
`;

export const MenuSubItemIcon = styled.div`
  color: ${({ theme }) => theme.defaultColors.white};
  font-size: ${({ theme }) => theme.typography.text.xsmall};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  font-family: ${({ theme }) => theme.typography.fontsFamily.poppins};
  margin-right: 5px;
`;

export const MenuSubItemText = styled.span`
  color: ${({ theme }) => theme.defaultColors.white};
  font-size: ${({ theme }) => theme.typography.text.xsmall};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  font-family: ${({ theme }) => theme.typography.fontsFamily.poppins};
`;
