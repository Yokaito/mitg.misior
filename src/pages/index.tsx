import useTranslation from '@/sdk/hooks/useTranslation';
import { Page } from '@/typings/page';
import Head from 'next/head';
import { getSession, signIn } from 'next-auth/react';
import Section from '@/ui/Section';
import Newsticker from '@/components/Newsticker';
import Layout from '@/layout';
import { misiorWeb } from '@/misior';

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
        <title>{`${misiorWeb.otName} | Home`}</title>
      </Head>
      <Layout>
        <Section title={t(`newsticker/title`)} padding="minimal">
          <Newsticker />
        </Section>
        <Section title="Teste" padding="minimal">
          <button onClick={handleClickLanguage}>{locale}</button>
          <div>
            <button onClick={() => signIn(`credentials`)}>
              Login Credentials
            </button>
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default Home;
