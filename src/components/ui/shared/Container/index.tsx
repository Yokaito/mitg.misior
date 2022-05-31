import { FC } from 'react';
import * as S from './styles';

import { ContainerInsideProps } from './styles';

export const Container: FC<ContainerInsideProps> = ({ children, gap }) => {
  return (
    <S.ContainerWrapper>
      <S.ContainerInside gap={gap}>{children}</S.ContainerInside>
    </S.ContainerWrapper>
  );
};

export default Container;
