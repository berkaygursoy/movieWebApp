import { useState } from "react";

export const Movies = ({ src, alt, onLoad, onError }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
    onError?.();
  };

  return (
    <div className="relative w-full h-96">
      {loading && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
        </div>
      )}

      {error ? (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="text-4xl mb-2">🎬</div>
            <span className="text-sm">Poster yüklenemedi</span>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity ${loading ? "opacity-0" : "opacity-100"}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export const MovieRating = ({ rating }) => (
  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-lg font-bold text-sm flex items-center">
    <Star className="w-4 h-4 mr-1" />
    {rating}
  </div>
);



