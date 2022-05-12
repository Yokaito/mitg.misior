import * as S from './styles';

export const Layout: React.FC = ({ children }) => (
  <S.LayoutWrapper id="layout-wrapper">{children}</S.LayoutWrapper>
);

export default Layout;
