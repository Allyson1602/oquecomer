import '@styles/globals.css';
import theme from 'ui/themes/theme';
import React from 'react';
import Head from 'next/head';
import Header from 'ui/components/surfaces/Header/Header';
import Footer from 'ui/components/surfaces/Footer/Footer';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppContainer } from '@styles/pages/_app.style';

function MyApp({ Component, pageProps }: AppProps) {
  return(<>
    <Head>
        <title>oquecomer</title>
    </Head>

    {/* <CssBaseline /> */}
    <ThemeProvider theme={theme}>
        <AppContainer>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </AppContainer>
    </ThemeProvider>
  </>);
}

export default MyApp;
