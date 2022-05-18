import styled from 'styled-components';
import Border1 from '@/assets/images/borders/border-1.gif';

export const BorderWrapper = styled.div`
  height: 6px;
  background-image: ${`url(${Border1.src})`};
  display: flex;
  justify-content: space-between;
  position: relative;
`;
