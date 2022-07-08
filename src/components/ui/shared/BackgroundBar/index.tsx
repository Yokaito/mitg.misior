import { FC } from 'react';
import Border from '../../Border';
import * as S from './styles';
import { BackgroundBarProps } from './styles';

export interface BackgroundBarPropsComponent extends BackgroundBarProps {
  hasBottomBorder?: boolean;
}

export const BackgroundBar: FC<BackgroundBarPropsComponent> = ({
  children,
  typeBackground,
  hasBottomBorder = false,
}) => {
  return (
    <S.TitleBackgroundBarWrapper>
      <Border />
      <S.BackgroundBar typeBackground={typeBackground}>
        {children}
      </S.BackgroundBar>
      {hasBottomBorder && <Border bottom />}
    </S.TitleBackgroundBarWrapper>
  );
};

export default BackgroundBar;
