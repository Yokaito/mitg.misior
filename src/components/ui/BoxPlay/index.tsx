import Link from 'next/link';
import { FC } from 'react';
import * as S from './styles';

interface BoxPlayProps {
  showLogo?: boolean;
}

export const BoxPlay: FC<BoxPlayProps> = ({ children, showLogo }) => {
  return (
    <S.BoxPlayWrapper>
      {showLogo && (
        <Link href="/">
          <S.LogoArtwork />
        </Link>
      )}
      <S.BoxPlayBorder />
      <S.BoxPlayContent>
        <S.BoxPlayContentBorder />
        {children}
        <S.BoxPlayContentBorder right />
      </S.BoxPlayContent>
      <S.BoxPlayBorder bottom />
    </S.BoxPlayWrapper>
  );
};

export default BoxPlay;
