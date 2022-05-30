import Script from 'next/script';
import { FC } from 'react';
import { misiorWeb } from '@/misior';

export const pageView = (url: string) => {
  if (typeof window !== `undefined`) {
    window.gtag(`config`, misiorWeb.ga_tracking_id, {
      page_path: url,
    });
  }
};

export const Analytics: FC = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${misiorWeb.ga_tracking_id}`}
      />
      <Script
        id="misior-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${misiorWeb.ga_tracking_id}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default Analytics;
