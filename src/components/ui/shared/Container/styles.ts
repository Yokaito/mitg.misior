import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.defaultColors.black};
  border-top: none;
  background-color: ${({ theme }) => theme.backgrounds.quinary.default};
`;

export type ContainerInsideProps = {
  gap?: number;
};

export const ContainerInside = styled.div<ContainerInsideProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => `${gap}px`};
  border: 1px solid ${({ theme }) => theme.borders.tertiary.default};
  border-top: none;
  padding: 5px 7px 10px;
`;
