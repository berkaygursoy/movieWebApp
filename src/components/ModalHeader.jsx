export const ModalHeader = ({ movie, onClose }) => (
  <div className="relative">
    <img src={movie.backdrop} alt={movie.title} className="w-full h-64 md:h-80 object-cover" />
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
);



