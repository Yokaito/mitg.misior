import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="manifest.json"></link>
          <meta
            name="description"
            content="Tibia is a free massively multiplayer online role-playing game (MMORPG). Join this fascinating game that has thousands of fans from all over the world! - https://misior.mitg.dev/"
          />
          <meta
            name="keywords"
            content="free online game, free multiplayer game, free online rpg, free mmorpg, mmorpg, mmog, online role playing game, online multiplayer game, internet game, online rpg, rpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://misior.mitg.dev/" />
          <meta
            property="og:title"
            content="Tibia - Free Multiplayer Online Role Playing Game"
          />
          <meta
            property="og:description"
            content="Tibia is a free massively multiplayer online role-playing game (MMORPG). Join this fascinating game that has thousands of fans from all over the world!"
          />
          <meta
            property="og:image"
            content="https://misior.mitg.dev/logo/icon-192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
