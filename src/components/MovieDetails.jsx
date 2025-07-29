const MovieDetails = ({ movie }) => {
  return (
    <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
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
          </div>

        </div>
  );
};
export default MovieDetails;
