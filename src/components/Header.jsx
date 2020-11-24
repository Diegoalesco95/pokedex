import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full p-4 bg-indigo-500 shadow-lg">
      <Link href="/">
        <a className="w-32 mx-auto flex flex-col items-center justify-center">
          <Image src="/images/pika.png" alt="Pikachu" width={50} height={50} />
          <h1 className="text-2xl font-bold text-gray-100">Pokédex</h1>
        </a>
      </Link>
    </header>
  );
};

export default Header;
