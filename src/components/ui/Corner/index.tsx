import { FC } from 'react';
import * as S from './styles';

export interface CornerProps {
  right?: boolean;
  bottom?: boolean;
}

export const Corner: FC<CornerProps> = ({ ...props }) => {
  return <S.CornerWrapper {...props}></S.CornerWrapper>;
};

export default Corner;
