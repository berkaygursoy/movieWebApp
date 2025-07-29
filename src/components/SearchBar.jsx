import { Filter, Search } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm, placeholder = "Film, yönetmen veya oyuncu ara..." }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

const FilterButton = ({ showFilters, setShowFilters }) => (
  <button
    onClick={() => setShowFilters(!showFilters)}
    className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
  >
    <Filter className="w-5 h-5" />
  </button>
);

const GenreFilter = ({ genres, selectedGenre, setSelectedGenre }) => (
  <div className="mt-4 p-4 bg-gray-800 rounded-lg">
    <h3 className="text-white font-semibold mb-3">Türe Göre Filtrele</h3>
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => setSelectedGenre(genre)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedGenre === genre ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {genre === "all" ? "Tümü" : genre}
        </button>
      ))}
    </div>
  </div>
);

export { FilterButton, GenreFilter };
