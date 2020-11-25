import { useState } from 'react';
import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage,
} from 'react-icons/md';
import usePokemons from 'hooks/usePokemons';

const Paginator = ({ count, index }) => {
  const [pageIndex, setPageIndex] = useState(index);

  const { pokemons, isLoading } = usePokemons(
    `${process.env.NEXT_PUBLIC_API_URL}/pokemon/?offset=${pageIndex}&limit=20`
  );

  if (!isLoading) {
    console.log('[pokemons]', pokemons);
  }

  function getPageIndex(page) {
    const newIndex = page * 20;
    setPageIndex(newIndex);
  }

  const pages = Math.floor(count / 20);
  const firstThree = [
    index > pages - 5 ? pages - 5 : index,
    index > pages - 5 ? pages - 4 : index + 1,
    index > pages - 5 ? pages - 3 : index + 2,
  ];
  const lastThree = [pages - 2, pages - 1, pages];

  return (
    <div className="my-4 border-t border-gray-400 flex justify-between">
      <div className="mt-4">
        <p className="text-sm text-gray-700">
          Showing
          <span className="mx-1 font-medium">1</span>
          to
          <span className="mx-1 font-medium">1</span>
          of
          <span className="mx-1 font-medium">{count}</span>
          results
        </p>
      </div>
      <nav className="relative z-0 pt-4 inline-flex shadow-sm -space-x-px">
        <button
          type="button"
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => getPageIndex(1)}
          disabled={index === 1}
        >
          <MdFirstPage />
        </button>
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => getPageIndex(index - 1)}
          disabled={index === 1}
        >
          <MdChevronLeft />
        </button>
        {firstThree.map((page) => (
          <button
            key={page}
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => getPageIndex(page)}
          >
            {page}
          </button>
        ))}
        {index >= pages - 5 ? null : (
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => getPageIndex(firstThree[2] + 1)}
          >
            ...
          </button>
        )}

        {lastThree.map((page) => (
          <button
            key={page}
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => getPageIndex(page)}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => getPageIndex(index - 1)}
          disabled={index === pages}
        >
          <MdChevronRight />
        </button>
        <button
          type="button"
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => getPageIndex(pages)}
          disabled={index === pages}
        >
          <MdLastPage />
        </button>
      </nav>
    </div>
  );
};

export default Paginator;
