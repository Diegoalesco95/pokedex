import getPokemons from 'helpers/getPokemons';

import Layout from 'components/Layout';
import List from 'components/List';

const Home = ({ pokemons }) => {
  return (
    <>
      <Layout>
        <main className="min-h-screen px-2 py-8">
          <List pokemons={pokemons} />
        </main>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const pokemons = await getPokemons('pokemon');

  return {
    props: {
      pokemons,
    },
  };
}

export default Home;
