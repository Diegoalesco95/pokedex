export default function typeColor(type) {
  switch (type) {
    case 'fighting':
      return 'from-gray-400 to-gray-600';
    case 'flying':
      return 'from-gray-200 to-gray-400';
    case 'poison':
      return 'from-purple-800 to-purple-900';
    case 'ground':
      return 'from-yellow-800 to-yellow-900';
    case 'rock':
      return 'from-gray-700 to-gray-800';
    case 'bug':
      return 'from-yellow-200 to-yellow-500';
    case 'ghost':
      return 'from-gray-500 to-gray-600';
    case 'steel':
      return 'from-gray-600 to-gray-700';
    case 'fire':
      return 'from-red-400 to-red-700';
    case 'water':
      return 'from-blue-300 to-blue-500';
    case 'grass':
      return 'from-green-400 to-green-600';
    case 'electric':
      return 'from-yellow-200 to-yellow-300';
    case 'psychic':
      return 'from-indigo-200 to-indigo-300';
    case 'ice':
      return 'from-blue-200 to-blue-300';
    case 'dragon':
      return 'from-red-400 to-red-500';
    case 'dark':
      return 'from-gray-800 to-gray-900';
    case 'fairy':
      return 'from-pink-300 to-pink-400';
    case 'unknown':
      return 'from-gray-500 to-gray-700';
    case 'shadow':
      return 'from-gray-600 to-gray-800';
    default:
      return 'from-yellow-600 to-yellow-800';
  }
}
