/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from 'react-redux';
import { useStore } from 'state/store';
import initialState from 'state/initialState';
import 'styles/index.css';

function MyApp({ Component, pageProps }) {
  const store = useStore(initialState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
