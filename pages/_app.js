import { AppProvider } from '../context/app';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { useEffect } from 'react';

import 'reseter.css';

export default function App(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Container maxWidth="md">
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </AppProvider>
  );
}
