import styled from 'styled-components';

export const InnerContainerWrapper = styled.div`
  box-shadow: 3px 3px 2px ${({ theme }) => theme.shadows.secondary.default};
  border: 1px solid ${({ theme }) => theme.backgrounds.quaternary.default};
  background-color: ${({ theme }) => theme.backgrounds.septenary.default};
  width: 100%;
  word-break: break-all;
`;

export const InnerContainerInside = styled.div`
  border: 1px solid ${({ theme }) => theme.borders.quaternary.default};
  padding: 10px;
`;
