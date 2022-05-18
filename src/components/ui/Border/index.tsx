import { FC } from 'react';
import Corner from '../Corner';
import * as S from './styles';

export interface BorderProps {
  bottom?: boolean;
}

export const Border: FC<BorderProps> = ({ bottom }) => {
  return (
    <S.BorderWrapper>
      <Corner bottom={bottom} />
      <Corner right bottom={bottom} />
    </S.BorderWrapper>
  );
};

export default Border;
