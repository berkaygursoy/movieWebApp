import MovieCard from './MovieCard';

const MovieGrid = ({ movies, searchTerm, onMovieSelect, loading, error, onRetry }) => {
  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">⏳</div>
        <h3 className="text-2xl font-bold text-white mb-2">Filmler yükleniyor...</h3>
        <p className="text-gray-400">Lütfen bekleyin</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">❌</div>
        <h3 className="text-2xl font-bold text-white mb-2">Hata oluştu</h3>
        <p className="text-gray-400 mb-4">{error}</p>
        <button 
          onClick={onRetry}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🎬</div>
        <h3 className="text-2xl font-bold text-white mb-2">Film bulunamadı</h3>
        <p className="text-gray-400">Arama kriterlerinizi değiştirmeyi deneyin</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">
          Popüler Filmler
          {searchTerm && (
            <span className="text-yellow-400 ml-2">
              - "{searchTerm}" için {movies.length} sonuç
            </span>
          )}
        </h2>
        <span className="text-gray-400">{movies.length} film gösteriliyor</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onMovieSelect={onMovieSelect} />
        ))}
      </div>
    </main>
  );
};

export default MovieGrid;
