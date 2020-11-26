import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Building a pokedex as a practice exercise using NextJS 10 and Redux"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/pokeball.png"
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
