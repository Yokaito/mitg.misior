import styled from 'styled-components';

export const MenuBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type MenuBoxBorderWrapperProps = {
  bottom?: boolean;
};

export const MenuBoxBorderWrapper = styled.div<MenuBoxBorderWrapperProps>`
  display: flex;
  transform: ${({ bottom }) => (bottom ? `rotate(180deg)` : null)};
`;

export const MenuBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  padding: 0 5px;
`;
