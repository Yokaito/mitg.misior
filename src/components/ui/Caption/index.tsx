import { FC } from 'react';
import * as S from './styles';

interface CaptionProps {
  title: string;
}

export const Caption: FC<CaptionProps> = ({ title, children }) => {
  return (
    <S.CaptionWrapper>
      <S.CaptionHeader>
        <S.CaptionBorder area="TT-TOP">
          <S.CaptionCorner />
          <S.CaptionCorner right />
        </S.CaptionBorder>
        <S.CaptionBorder area="TT-RIGHT" vertical />
        <S.CaptionTitle>{title}</S.CaptionTitle>
        <S.CaptionBorder area="TT-LEFT" vertical />
        <S.CaptionBorder area="TT-BOT">
          <S.CaptionCorner bot />
          <S.CaptionCorner bot right />
        </S.CaptionBorder>
      </S.CaptionHeader>
      {children}
    </S.CaptionWrapper>
  );
};

export default Caption;
