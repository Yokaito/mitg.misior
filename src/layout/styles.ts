import styled from 'styled-components';

/*
  HD = Header
  LB = Left Bar
  MNL = Menu Left
  MC = Main Content
  MNR = Menu Right
  RB = Right Bar
  FT = Footer
*/

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(20px, auto) 180px minmax(25rem, 60rem) 180px minmax(
      20px,
      auto
    );
  grid-template-rows: 8.5rem max-content 8rem;
  grid-template-areas:
    'HD HD HD HD HD'
    'LB MNL MC MNR RB'
    'FT FT FT FT FT';
  gap: 25px;
`;

export const MainContentWrapper = styled.section`
  grid-area: MC;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const CopyRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2px;
`;

export const CopyRightTitle = styled.p`
  color: ${({ theme }) => theme.defaultColors.white};
  font-size: ${({ theme }) => theme.typography.text.xxxsmall};
`;

export const CopyRightCreator = styled.p`
  a {
    color: ${({ theme }) => theme.defaultColors.white};
    font-size: ${({ theme }) => theme.typography.text.xxxsmall};
  }
`;

export const CopyRightText = styled.p`
  color: ${({ theme }) => theme.defaultColors.white};
  font-size: ${({ theme }) => theme.typography.text.xxxsmall};
`;
