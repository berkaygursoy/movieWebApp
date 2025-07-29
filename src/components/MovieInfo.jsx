const MovieInfo = ({ movie }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Film Bilgileri</h3>
      <div className="space-y-2 text-gray-300">
        <p>
          <span className="text-yellow-400">Yönetmen:</span> {movie.director}
        </p>
        <p>
          <span className="text-yellow-400">Yıl:</span> {movie.year}
        </p>
        <p>
          <span className="text-yellow-400">Süre:</span> {movie.duration}
        </p>
        <p>
          <span className="text-yellow-400">Tür:</span> {movie.genre}
        </p>
      </div>
    </div>
  );
};
export default MovieInfo;
