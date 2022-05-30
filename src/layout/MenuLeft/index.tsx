import BoxPlay from '@/components/ui/BoxPlay';
import Button from '@/components/ui/Button';
import useTranslation from '@/hooks/useTranslation';
import { FC } from 'react';

import * as S from './styles';

export const MenuLeft: FC = () => {
  const { t } = useTranslation();

  return (
    <S.MenuLeftWrapper>
      <BoxPlay text={t(`account/create`)} pathText="/account/create" showLogo>
        <Button path="/login" extend>
          {t(`button/login`)}
        </Button>
      </BoxPlay>
    </S.MenuLeftWrapper>
  );
};

export default MenuLeft;
