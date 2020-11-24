import getPokemons from 'helpers/getPokemons';

import Layout from 'components/Layout';
import Pokemons from 'components/Pokemons';

const Home = ({ pokemons }) => {
  return (
    <>
      <Layout>
        <main className="min-h-screen px-2 py-8">
          <Pokemons pokemons={pokemons} />
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
