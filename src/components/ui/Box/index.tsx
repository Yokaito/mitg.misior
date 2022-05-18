import { FC } from 'react';
import Border from '../Border';

import * as S from './styles';

export interface BoxProps {
  title: string;
  padding?: 'minimal' | 'normal' | 'large';
}

export const Box: FC<BoxProps> = ({ children, title }) => {
  return (
    <S.BoxWrapper>
      <Border />
      {title}
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <Border bottom />
    </S.BoxWrapper>
  );
};

export default Box;
