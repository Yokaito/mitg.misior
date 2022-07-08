import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import * as S from './styles';
import { setInitiallyOpen } from '@/sdk/store/slicers';

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
  parentName: string;
}

export const MenuSubItem: FC<MenuSubItemProps> = ({
  text = `Default Item`,
  href = `/`,
  parentName,
}) => {
  const router = useRouter();
  const store = useStore();

  const isActive = router.pathname === href;

  useEffect(() => {
    if (router.pathname !== href) return;

    store.dispatch(setInitiallyOpen({ text: parentName, initiallyOpen: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
