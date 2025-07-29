const MoviePlot = ({ plot }) => {
  return (
    <div>
    <h3 className="text-lg font-semibold text-white mb-3">Özet</h3>
    <p className="text-gray-400 leading-relaxed">{plot}</p>
  </div>
  );
};
export default MoviePlot;
