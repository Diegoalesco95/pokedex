import getPokemons from 'helpers/getPokemons';

import Layout from 'components/Layout';
import List from 'components/List';
import Paginator from 'components/Paginator';

const Home = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <>
      <Layout>
        <main className="min-h-screen px-2 py-8">
          <List pokemons={pokemons} />
          <Paginator count={pokemons.count} index={52} />
        </main>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const pokemons = await getPokemons(`${process.env.API_URL}/pokemon`);

  return {
    props: {
      pokemons,
    },
  };
}

export default Home;
