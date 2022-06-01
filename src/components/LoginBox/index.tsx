import useTranslation from '@/sdk/hooks/useTranslation';
import { useSession, signOut } from 'next-auth/react';
import BoxPlay from '@/ui/BoxPlay';
import Button from '@/ui/Button';
import * as S from './styles';
import Link from 'next/link';

export const LoginBox = () => {
  const { t } = useTranslation();
  const { status } = useSession();

  return (
    <BoxPlay showLogo>
      {status === `authenticated` ? (
        <>
          <Button path="/account" extend>
            {t(`account/my_account`)}
          </Button>
          <S.LoginBoxText onClick={() => signOut()}>
            {t(`account/logout`)}
          </S.LoginBoxText>
        </>
      ) : (
        <>
          <Button path="/login" extend>
            {t(`button/login`)}
          </Button>
          <Link href="/account/create">
            <S.LoginBoxText>{t(`account/create`)}</S.LoginBoxText>
          </Link>
        </>
      )}
    </BoxPlay>
  );
};

export default LoginBox;
