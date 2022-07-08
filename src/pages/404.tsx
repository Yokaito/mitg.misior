import Section from '@/components/ui/Section';
import Layout from '@/layout';
import { misiorWeb } from '@/misior';
import Head from 'next/head';
import { FC } from 'react';
import PageNotFound from '@/components/PageNotFound';
import useTranslation from '@/sdk/hooks/useTranslation';

export const NotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${misiorWeb.otName} | Not Found`}</title>
      </Head>
      <Layout>
        <Section
          title={t(`notFound/section`)}
          typeBackground="blue"
          padding="large"
        >
          <PageNotFound></PageNotFound>
        </Section>
      </Layout>
    </>
  );
};

export default NotFound;
