import { FC } from 'react';
import * as S from './styles';

export const InnerContainer: FC = ({ children }) => {
  return (
    <S.InnerContainerWrapper>
      <S.InnerContainerInside>{children}</S.InnerContainerInside>
    </S.InnerContainerWrapper>
  );
};

export default InnerContainer;
