import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import * as S from './styles';

const SubItemMotionConfigs = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuSubItemProps {
  text: string;
  href?: string;
}

export const MenuSubItem: FC<MenuSubItemProps> = ({
  text = `Default Item`,
  href = `/`,
}) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <S.MenuSubItemWrapper variants={SubItemMotionConfigs}>
      <Link href={href}>
        <S.MenuSubItemContent>
          <S.MenuSubItemBorder />
          <S.MenuSubItemIcon>{isActive && `>`}</S.MenuSubItemIcon>
          <S.MenuSubItemText>{text}</S.MenuSubItemText>
          <S.MenuSubItemBorder right />
        </S.MenuSubItemContent>
      </Link>
    </S.MenuSubItemWrapper>
  );
};
