import { AppProps } from 'next/app';
import { Layout } from '@/layout';
import '@/styles/fonts.css';
import '@/styles/resets/reset.css';
import '@/styles/resets/_modern-normalize.css';
import LanguageProvider from '@/contexts/LanguageContext';

export const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </LanguageProvider>
  );
};

export default MyApp;
