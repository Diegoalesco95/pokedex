import { FaQuestion } from 'react-icons/fa';

const CardSkeleton = () => {
  const stats = [
    'Hp',
    'Attack',
    'Defense',
    'Special-Attack',
    'Special-Defense',
    'Speed',
  ];

  return (
    <div className="max-w-xs h-96 p-4 mx-auto rounded-lg shadow-2xl flex flex-col items-center opacity-0 animate-fadeIn bg-gradient-to-r from-indigo-400 to-indigo-800">
      <div className="h-full w-full">
        <div className="w-full h-24 py-2 flex items-center justify-center bg-black bg-opacity-60 rounded-t-md">
          <FaQuestion className="h-auto text-7xl text-gray-200" />
        </div>
        <div className="relative w-full h-56 p-4 rounded-b-md bg-white bg-opacity-60 flex flex-col items-center">
          <span className="absolute -top-4 right-4 w-20 p-1 text-sm text-center tracking-widest text-gray-100 uppercase rounded-md bg-gradient-to-r from-indigo-400 to-indigo-800">
            ????
          </span>
          <h2 className="text-xl capitalize font-bold">????</h2>
          <div className="grid grid-cols-1 gap-y-0">
            {stats.map((stat) => (
              <div key={stat} className="grid grid-cols-2 gap-x-4">
                <p className="text-sm font-light text-right capitalize">
                  {stat}
                </p>
                <span className="text-sm">????</span>
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-2">
            <div>
              <span className="text-xs uppercase">Ability</span>
              <p className="text-xs capitalize font-bold">????</p>
            </div>
            <div className="justify-self-end">
              <span className="text-xs uppercase">Hidden ability</span>
              <p className="text-xs capitalize font-bold text-right">????</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
