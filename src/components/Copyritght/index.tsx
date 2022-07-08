import useTranslation from '@/sdk/hooks/useTranslation';
import Link from 'next/link';
import { FC } from 'react';
import * as S from './styles';

export const Copyright: FC = () => {
  const { t } = useTranslation();

  return (
    <S.CopyRightWrapper>
      <S.CopyRightTitle>{t(`copyright/title`)}</S.CopyRightTitle>

      <S.CopyRightText>{t(`copyright/text`)}</S.CopyRightText>
      <S.CopyRightCreator>
        <Link href="https://github.com/Yokaito">
          {`${t(`copyright/createdBy`)} Kamity`}
        </Link>
      </S.CopyRightCreator>
    </S.CopyRightWrapper>
  );
};

export default Copyright;
