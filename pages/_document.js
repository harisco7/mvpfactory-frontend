/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-filename-extension */

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Children } from 'react';
import { ServerStyleSheets } from '@material-ui/core/styles';

const GOOGLE_FONT_URL =
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
const MATERIAL_ICONS_URL = 'https://fonts.googleapis.com/icon?family=Material+Icons';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link href={GOOGLE_FONT_URL} rel="stylesheet" />
          <link href={MATERIAL_ICONS_URL} rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
