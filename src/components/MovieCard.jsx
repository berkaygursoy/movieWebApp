import { Calendar, Clock, Play, Star } from "lucide-react";

const MovieCard = ({ movie, onMovieSelect }) => {
  return (
    <div
      className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
      onClick={() => onMovieSelect(movie)}
    >
      <div className="relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-96 object-cover group-hover:opacity-80 transition-opacity"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all">
          <Play className="text-white opacity-0 group-hover:opacity-100 w-16 h-16 transition-opacity" />
        </div>
        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-lg font-bold text-sm flex items-center">
          <Star className="w-4 h-4 mr-1" />
          {movie.rating}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
          {movie.title}
        </h3>
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="mr-4">{movie.year}</span>
          <Clock className="w-4 h-4 mr-2" />
          <span>{movie.duration}</span>
        </div>
        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {movie.genre}
        </span>
      </div>
    </div>
  );
};
export default MovieCard;
