import { FC } from 'react';
import Border from '../Border';

import * as S from './styles';
import { BoxHeaderProps } from './styles';

export interface BoxProps extends BoxHeaderProps {
  title: string;
  padding?: 'minimal' | 'normal' | 'large';
}

export const Box: FC<BoxProps> = ({
  children,
  title,
  typeBackground,
  padding,
}) => {
  return (
    <S.BoxWrapper>
      <Border />
      <S.BoxHeader typeBackground={typeBackground}>
        <S.Title>{title}</S.Title>
      </S.BoxHeader>
      <S.BoxContentWrapper padding={padding}>{children}</S.BoxContentWrapper>
      <Border bottom />
    </S.BoxWrapper>
  );
};

export default Box;
