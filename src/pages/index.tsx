import useTranslation from '@/hooks/useTranslation';
import { Page } from '@/typings/page';
import Head from 'next/head';
import { signIn } from 'next-auth/react';
import Box from '@/components/ui/Box';
import Newsticker from '@/components/Newsticker';
import Layout from '@/layout';

export const Home: Page = () => {
  const { t, changeLanguage, locale } = useTranslation();
  const handleClickLanguage = () => {
    if (locale == `ptBr`) {
      changeLanguage(`enUs`);
    } else {
      changeLanguage(`ptBr`);
    }
  };

  return (
    <>
      <Head>
        <title>Misior | Home</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/logo/mitg-icon.svg" />
      </Head>
      <Layout>
        <button onClick={handleClickLanguage}>{locale}</button>
        <div>
          <button onClick={() => signIn(`credentials`)}>
            Login Credentials
          </button>
        </div>
        <Box title={t(`newsticker/title`)} padding="minimal">
          <Newsticker />
        </Box>
      </Layout>
    </>
  );
};

export default Home;
