/* eslint-disable react/jsx-props-no-spreading */
import 'styles/index.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
