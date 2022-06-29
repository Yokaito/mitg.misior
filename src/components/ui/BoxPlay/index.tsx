import Link from 'next/link';
import { FC } from 'react';
import * as S from './styles';
import Artwork from '@/assets/images/general/tibia-logo-artwork.gif';

interface BoxPlayProps {
  showLogo?: boolean;
}

export const BoxPlay: FC<BoxPlayProps> = ({ children, showLogo }) => {
  return (
    <S.BoxPlayWrapper>
      {showLogo && (
        <S.LogoArtworkWrapper>
          <Link href="/">
            <S.LogoArtwork src={Artwork} />
          </Link>
        </S.LogoArtworkWrapper>
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
