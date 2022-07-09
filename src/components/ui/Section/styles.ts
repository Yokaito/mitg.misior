import styled from 'styled-components';

import { SectionProps } from '.';
import { FondamentoTitle } from '../shared/Typography';

export const SectionWrapper = styled.section`
  height: max-content;
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${({ theme }) => theme.borders.primary.default};
  border-left: 2px solid ${({ theme }) => theme.borders.primary.default};
  background-color: ${({ theme }) => theme.backgrounds.secondary.default};
  z-index: 0;
`;

type ContentProps = Pick<SectionProps, 'padding'>;

const sectionContentWrapperPadding = ({ padding }: ContentProps) => {
  if (padding === `minimal`) {
    return `.3rem`;
  }

  if (padding === `normal`) {
    return `.6rem`;
  }

  return `.9rem`;
};

export const SectionContentWrapper = styled.div<ContentProps>`
  border: 1px solid ${({ theme }) => theme.borders.secondary.default};
  background-color: ${({ theme }) => theme.backgrounds.primary.default};
  padding: ${({ padding }) => sectionContentWrapperPadding({ padding })};
  margin: 0.4rem 0.25rem 0.25rem;
`;

export const SectionTitle = styled(FondamentoTitle)`
  margin-left: 1rem;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  font-size: ${({ theme }) => theme.typography.text.large};
  user-select: none;
  text-transform: capitalize;
`;
