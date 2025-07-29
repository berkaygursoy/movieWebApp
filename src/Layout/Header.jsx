import SearchBar, { FilterButton, GenreFilter } from "../components/SearchBar";

export const Header = ({
  searchTerm,
  setSearchTerm,
  showFilters,
  setShowFilters,
  selectedGenre,
  setSelectedGenre,
  genres = [],
}) => (
  <header className="bg-black bg-opacity-80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-800">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
          CineHub
        </h1>

        <div className="flex items-center space-x-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterButton showFilters={showFilters} setShowFilters={setShowFilters} />
        </div>
      </div>

      {showFilters && <GenreFilter genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />}
    </div>
  </header>
);

export const HeroSection = () => (
  <section className="relative h-96 flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1489599874821-063cf05ecd8c?w=1200&h=600&fit=crop)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>
    <div className="relative text-center text-white z-10">
      <h2 className="text-5xl md:text-6xl font-bold mb-4">
        En İyi Filmleri
        <span className="block text-yellow-400">Keşfedin</span>
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Binlerce film arasından favorilerinizi bulun ve sinema deneyiminizi yaşayın
      </p>
    </div>
  </section>
);

