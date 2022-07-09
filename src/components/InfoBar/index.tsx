import { FC } from 'react';
import BackgroundBar from '../ui/shared/BackgroundBar';
import * as S from './styles';

export const InfoBar: FC = () => {
  return (
    <>
      <BackgroundBar typeBackground="red" hasBottomBorder>
        <S.InfoBarWrapper>
          <S.InfoBarSocialWrapper>test</S.InfoBarSocialWrapper>
          <S.InfoBarServerStatusWrapper>Test</S.InfoBarServerStatusWrapper>
        </S.InfoBarWrapper>
      </BackgroundBar>
    </>
  );
};

export default InfoBar;
