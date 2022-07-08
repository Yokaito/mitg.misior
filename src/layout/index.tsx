import * as S from './styles';

import MenuLeft from './MenuLeft';
import Link from 'next/link';
import useTranslation from '@/sdk/hooks/useTranslation';

export const Layout: React.FC = ({ children }) => {
  const { t } = useTranslation();

  return (
    <S.LayoutWrapper id="layout-wrapper">
      <MenuLeft />
      <S.MainContentWrapper>
        {children}
        <S.CopyRightWrapper>
          <S.CopyRightTitle>{t(`copyright/title`)}</S.CopyRightTitle>

          <S.CopyRightText>{t(`copyright/text`)}</S.CopyRightText>
          <S.CopyRightCreator>
            <Link href="https://github.com/Yokaito">
              {`${t(`copyright/createdBy`)} Kamity`}
            </Link>
          </S.CopyRightCreator>
        </S.CopyRightWrapper>
      </S.MainContentWrapper>
    </S.LayoutWrapper>
  );
};

export default Layout;
