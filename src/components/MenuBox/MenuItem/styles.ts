import styled from 'styled-components';
import MenuItemBackground from '@/assets/images/shared/menu/button-background.gif';
import PlusOld from '@/assets/images/helpers/plus.gif';
import MinusOld from '@/assets/images/helpers/minus.gif';
import { FondamentoTitle } from '@/ui/shared/Typography';
import { motion } from 'framer-motion';

export const MenuItemWrapper = styled.div`
  height: 32px;
  background: ${`url(${MenuItemBackground.src})`} no-repeat;
  cursor: pointer;
  position: relative;
  user-select: none;

  :hover {
    filter: brightness(1.1) contrast(1.1) saturate(1.1);
  }
`;

type MenuItemFeedbackProps = {
  active?: boolean;
};

export const MenuItemFeedback = styled.span<MenuItemFeedbackProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${({ active }) =>
      !active ? `url(${PlusOld.src})` : `url(${MinusOld.src})`}
    no-repeat;
  height: 12px;
  width: 12px;

  transition: all 0.2s ease-in-out;
`;

export const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 7px;
  gap: 0.5rem;
`;

export const MenuItemIcon = styled.div``;

export const MenuItemText = styled(FondamentoTitle)``;

export const MenuItemSubItemsWrapper = styled(motion.div)`
  background: ${({ theme }) => theme.backgrounds.octonary.default};
  margin: 0 3px;
`;
