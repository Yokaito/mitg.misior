import * as S from './styles';

import MenuLeft from './MenuLeft';
import InfoBar from '@/components/InfoBar';
import Copyright from '@/components/Copyritght';

export const Layout: React.FC = ({ children }) => {
  return (
    <S.LayoutWrapper id="layout-wrapper">
      <MenuLeft />
      <S.MainContentWrapper>
        <InfoBar />
        {children}
        <Copyright />
      </S.MainContentWrapper>
    </S.LayoutWrapper>
  );
};

export default Layout;
