import Link from 'next/link';
import { FC } from 'react';
import * as S from './styles';

interface BoxPlayProps {
  text?: string;
  pathText?: string;
}

export const BoxPlay: FC<BoxPlayProps> = ({ text, children, pathText }) => {
  return (
    <S.BoxPlayWrapper>
      <S.BoxPlayBorder />
      <S.BoxPlayContent>
        <S.BoxPlayContentBorder />
        {children}
        {text && (
          <Link href={pathText ?? `/`}>
            <S.BoxPlayContentText>{text}</S.BoxPlayContentText>
          </Link>
        )}
        <S.BoxPlayContentBorder right />
      </S.BoxPlayContent>
      <S.BoxPlayBorder bottom />
    </S.BoxPlayWrapper>
  );
};

export default BoxPlay;
