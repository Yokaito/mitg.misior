import { FC } from 'react';
import Border from '../Border';
import {
  BackgroundBar,
  BackgroundBarPropsComponent,
} from '../shared/BackgroundBar';

import * as S from './styles';

export interface SectionProps extends BackgroundBarPropsComponent {
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
      <BackgroundBar typeBackground={typeBackground}>
        <S.SectionTitle>{title}</S.SectionTitle>
      </BackgroundBar>
      <S.SectionContentWrapper padding={padding}>
        {children}
      </S.SectionContentWrapper>
      <Border bottom />
    </S.SectionWrapper>
  );
};

export default Section;
