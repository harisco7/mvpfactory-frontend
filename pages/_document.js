/* eslint-disable react/no-unknown-property */
import Document, { Html, Head, Main, NextScript } from 'next/document';

const GOOGLE_FONT_URL = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
const MATERIAL_ICONS_URL = 'https://fonts.googleapis.com/icon?family=Material+Icons';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

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

export default MyDocument;
