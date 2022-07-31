import Layout from '../src/components/Layout';
import GlobalStyle from '../src/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
