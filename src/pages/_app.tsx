import { AppProps } from 'next/app';
import '@/styles/fonts.css';
import '@/styles/resets/reset.css';
import '@/styles/resets/_modern-normalize.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/theme';
import LanguageProvider from '@/sdk/contexts/LanguageContext';
import { wrapper } from '@/sdk/store';
import { SessionProvider } from 'next-auth/react';
import GlobalStyles from '@/styles/resets/globalStyles';
import { useEffect } from 'react';
import { Analytics, pageView } from '@/sdk/analytics';

export const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    router.events.on(`routeChangeComplete`, handleRouteChange);
    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <SessionProvider session={session}>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <LanguageProvider>
          <Component {...pageProps} key={router.route} />
          <Analytics />
        </LanguageProvider>
      </SessionProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
