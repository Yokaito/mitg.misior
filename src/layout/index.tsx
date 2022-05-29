import * as S from './styles';

export const Layout: React.FC = ({ children }) => (
  <S.LayoutWrapper id="layout-wrapper">
    <S.MainContentWrapper>{children}</S.MainContentWrapper>
  </S.LayoutWrapper>
);

export default Layout;
