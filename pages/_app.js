import App from 'next/app';
import { AppProvider } from '../context/app';
import Container from '@material-ui/core/Container';
import Head from 'next/head';

import 'reseter.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppProvider>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <Container maxWidth="md">
          <Component {...pageProps} />
        </Container>
      </AppProvider>
    );
  }
}

export default MyApp;
