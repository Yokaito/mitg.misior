import useTranslation from '@/hooks/useTranslation';
import { Page } from '@/typings/page';
import Head from 'next/head';
import { signIn } from 'next-auth/react';
import { useFetch } from '@/lib/swr';
import { useEffect } from 'react';

export const Home: Page = () => {
  const { t, changeLanguage, locale } = useTranslation();
  const { data, error } = useFetch(`/api/status`);
  const handleClickLanguage = () => {
    if (locale == `ptBr`) {
      changeLanguage(`enUs`);
    } else {
      changeLanguage(`ptBr`);
    }
  };

  useEffect(() => {
    if (data) console.log(data);
    if (error) console.log(error);
  }, [data, error]);

  return (
    <div>
      <Head>
        <title>Misior | Home</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/logo/mitg-icon.svg" />
      </Head>
      <button onClick={handleClickLanguage}>{t(`home/template`)}</button>
      <div>
        <button onClick={() => signIn(`credentials`)}>Login Credentials</button>
      </div>
    </div>
  );
};

export default Home;
