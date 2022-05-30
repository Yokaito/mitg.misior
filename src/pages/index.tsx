import useTranslation from '@/hooks/useTranslation';
import { Page } from '@/typings/page';
import Head from 'next/head';
import { getSession, signIn } from 'next-auth/react';
import Section from '@/ui/Section';
import Newsticker from '@/components/Newsticker';
import Layout from '@/layout';

export const getServerSideProps = async (ctx: any) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};

export const Home: Page = () => {
  const { t, changeLanguage, locale } = useTranslation();

  const handleClickLanguage = async () => {
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
        <link rel="icon" href="/logo/mitg-icon.svg" />
      </Head>
      <Layout>
        <Section title={t(`newsticker/title`)} padding="minimal">
          <Newsticker />
        </Section>
        <button onClick={handleClickLanguage}>{locale}</button>
        <div>
          <button onClick={() => signIn(`credentials`)}>
            Login Credentials
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Home;
