import useTranslation from '@/hooks/useTranslation';
import { Page } from '@/typings/page';
import Head from 'next/head';
import { signIn } from 'next-auth/react';
import Section from '@/components/ui/Section';
import Newsticker from '@/components/Newsticker';
import Layout from '@/layout';
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
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
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
