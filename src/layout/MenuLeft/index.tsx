import LoginBox from '@/components/LoginBox';
import { FC } from 'react';

import * as S from './styles';

export const MenuLeft: FC = () => {
  return (
    <S.MenuLeftWrapper>
      <LoginBox />
    </S.MenuLeftWrapper>
  );
};

export default MenuLeft;
