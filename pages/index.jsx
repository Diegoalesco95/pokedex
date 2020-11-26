import getPokemons from 'helpers/getPokemons';
import Head from 'next/head';
import Layout from 'components/Layout';
import List from 'components/List';
import Favorites from 'components/Favorites';
import Grid from 'components/Grid';
import { useState } from 'react';

const Home = () => {
  const [isList, setIsList] = useState(true);
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Layout>
        <main className="relative min-h-screen flex flex-col items-center px-2 py-8">
          <button
            type="button"
            className="absolute -top-4 py-2 px-4 text-gray-100 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-700"
            onClick={() => setIsList(!isList)}
          >
            {`Change to ${isList ? 'Grid' : 'List'} view`}
          </button>
          {isList ? <List /> : <Grid />}
          <Favorites />
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
