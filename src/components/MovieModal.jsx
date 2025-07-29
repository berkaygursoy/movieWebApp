import React from 'react';
import { X, Play, Star, Calendar, Clock, User } from 'lucide-react';

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header with backdrop and close button */}
        <div className="relative">
          <img 
            src={movie.backdrop} 
            alt={movie.title} 
            className="w-full h-64 md:h-80 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{movie.title}</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <Star className="w-5 h-5 mr-2" />
              <span className="text-xl font-bold">{movie.rating}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-6 text-gray-300">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{movie.duration}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{movie.director}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">Özet</h3>
            <p className="text-gray-300 leading-relaxed">{movie.plot}</p>
          </div>

          {movie.cast && movie.cast.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Oyuncular</h3>
              <div className="flex flex-wrap gap-2">
                {movie.cast.map((actor, index) => (
                  <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              İzle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
