import { FC } from 'react';
import Border from '../Border';

import * as S from './styles';
import { SectionHeaderProps } from './styles';

export interface SectionProps extends SectionHeaderProps {
  title: string;
  padding?: 'minimal' | 'normal' | 'large';
}

export const Section: FC<SectionProps> = ({
  children,
  title,
  typeBackground,
  padding,
}) => {
  return (
    <S.SectionWrapper>
      <Border />
      <S.SectionHeader typeBackground={typeBackground}>
        <S.SectionTitle>{title}</S.SectionTitle>
      </S.SectionHeader>
      <S.SectionContentWrapper padding={padding}>
        {children}
      </S.SectionContentWrapper>
      <Border bottom />
    </S.SectionWrapper>
  );
};

export default Section;
