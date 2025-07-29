const FilterSection = ({ selectedGenre, setSelectedGenre, genres }) => {
  return (
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
};
export default FilterSection;
