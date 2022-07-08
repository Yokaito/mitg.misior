import useTranslation from '@/sdk/hooks/useTranslation';
import { FC } from 'react';
import * as S from './styles';

export const PageNotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <S.PageNotFoundWrapper>
        <S.PageNotFoundTitle>404</S.PageNotFoundTitle>
        <S.PageNotFoundSubtitle>{t(`notFound/title`)}</S.PageNotFoundSubtitle>
        <S.PageNotFoundText>{t(`notFound/text`)}</S.PageNotFoundText>
      </S.PageNotFoundWrapper>
    </>
  );
};

export default PageNotFound;
