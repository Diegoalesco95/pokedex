import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Pokédex</title>
          <meta name="description" content="Pokédex" />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/pokeball.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>You need to enable JavaScript to run this app.</noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
