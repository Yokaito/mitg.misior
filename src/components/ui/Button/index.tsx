import Link from 'next/link';
import { FC } from 'react';
import * as S from './styles';

export type ButtonProps = {
  extend?: boolean;
  path?: string;
};

export const Button: FC<ButtonProps> = ({ extend, path, children }) => {
  return (
    <Link href={path ?? `/`}>
      <S.ButtonWrapper extend={extend}>
        <S.ButtonText as="span">{children}</S.ButtonText>
      </S.ButtonWrapper>
    </Link>
  );
};

export default Button;
