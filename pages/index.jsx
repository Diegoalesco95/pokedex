import Head from 'next/head';

import getPokemons from 'helpers/getPokemons';

import Layout from 'components/Layout';
import List from 'components/List';
import Favorites from 'components/Favorites';
// import Paginator from 'components/Paginator';

const Home = () => {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/pokeball.png"
        />
      </Head>
      <Layout>
        <main className="min-h-screen px-2 py-8">
          <List />
          <Favorites />
          {/* <Paginator count={pokemons.count} index={52} /> */}
        </main>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const pokemons = await getPokemons(
    `${process.env.API_URL}/pokemon/?offset=0&limit=150`
  );

  return {
    props: {
      pokemons,
    },
  };
}

export default Home;
