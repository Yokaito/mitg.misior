import * as S from './styles';

import MenuLeft from './MenuLeft';

export const Layout: React.FC = ({ children }) => (
  <S.LayoutWrapper id="layout-wrapper">
    <MenuLeft />
    <S.MainContentWrapper>{children}</S.MainContentWrapper>
  </S.LayoutWrapper>
);

export default Layout;
