import LoginBox from '@/components/LoginBox';
import MenuBox from '@/components/MenuBox';
import { FC } from 'react';

import * as S from './styles';

export const MenuLeft: FC = () => {
  return (
    <S.MenuLeftWrapper>
      <LoginBox />
      <MenuBox />
    </S.MenuLeftWrapper>
  );
};

export default MenuLeft;
