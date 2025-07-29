const MovieCast = ({ cast }) => {
  return (
    <div>
    <h3 className="text-lg font-semibold text-white mb-3">Oyuncular</h3>
    <div className="flex flex-wrap gap-2">
      {cast.map((actor, index) => (
        <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
          {actor}
        </span>
      ))}
    </div>
  </div>
  );
};
export default MovieCast;
