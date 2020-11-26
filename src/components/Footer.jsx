const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full p-4 flex flex-col items-center justify-center bg-indigo-800">
      <div>
        <h1 className="text-2xl font-bold text-gray-100">Pokedex</h1>
      </div>
      <div className="w-full mt-2 py-2 border-t border-indigo-400 flex flex-col items-center justify-center">
        <p className="text-sm text-center text-gray-200">Capture them all!</p>
        <span className="text-xs text-center text-gray-200">
          {`${date} @Diegoalesco95`}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
