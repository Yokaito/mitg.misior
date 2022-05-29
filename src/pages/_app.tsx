import { AppProps } from 'next/app';

import '@/styles/fonts.css';
import '@/styles/resets/reset.css';
import '@/styles/resets/_modern-normalize.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/theme';
import LanguageProvider from '@/contexts/LanguageContext';
import { wrapper } from '@/store';
import { SessionProvider } from 'next-auth/react';

export const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SessionProvider session={session}>
        <LanguageProvider>
          <Component {...pageProps} key={router.route} />
        </LanguageProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
