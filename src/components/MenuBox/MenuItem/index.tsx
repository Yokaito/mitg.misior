import Image, { StaticImageData } from 'next/image';
import { FC, useEffect, useState } from 'react';
import * as S from './styles';
import MenuIconDefault from '@/assets/images/shared/menu/news-menu.gif';
import { motion } from 'framer-motion';

type MenuItemProps = {
  icon?: StaticImageData;
  text?: string;
  initiallyOpen?: boolean;
};

const MenuSubItensMotionConfigs = {
  open: {
    height: `auto`,
    transition: {
      stiffness: 200,
      restDelta: 1,
      damping: 20,
    },
  },
  closed: {
    height: 0,
    transition: {
      delay: 0.2,
      stiffness: 200,
      damping: 20,
    },
  },
};

const SubItemListMotionConfigs = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

export const MenuItem: FC<MenuItemProps> = ({
  children,
  icon = MenuIconDefault,
  text = `Menu Default`,
  initiallyOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  useEffect(() => {
    setIsOpen(initiallyOpen);
  }, [initiallyOpen]);

  return (
    <>
      <S.MenuItemWrapper onClick={() => setIsOpen(!isOpen)}>
        <S.MenuItemFeedback active={isOpen} />
        <S.MenuItemContent>
          <S.MenuItemIcon>
            <Image
              src={icon}
              alt={`${text} icon`}
              width={32}
              height={32}
            ></Image>
          </S.MenuItemIcon>
          <S.MenuItemText>{text}</S.MenuItemText>
        </S.MenuItemContent>
      </S.MenuItemWrapper>
      <S.MenuItemSubItemsWrapper
        initial={initiallyOpen}
        animate={isOpen ? `open` : `closed`}
        variants={MenuSubItensMotionConfigs}
      >
        <motion.ul variants={SubItemListMotionConfigs}>{children}</motion.ul>
      </S.MenuItemSubItemsWrapper>
    </>
  );
};

export default MenuItem;
