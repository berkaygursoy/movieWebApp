export const LoadingSpinner = ({ text = "Yükleniyor..." }) => (
  <div className="flex items-center justify-center py-16">
    <Loader2 className="w-8 h-8 text-yellow-400 animate-spin mr-3" />
    <span className="text-white text-lg">{text}</span>
  </div>
);

export const ErrorMessage = ({ message, onRetry }) => (
  <div className="text-center py-16">
    <div className="text-6xl mb-4">⚠️</div>
    <h3 className="text-2xl font-bold text-white mb-2">Bir hata oluştu</h3>
    <p className="text-gray-400 mb-4">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Tekrar Dene
      </button>
    )}
  </div>
);

export const EmptyState = ({ title, message, icon = "🎬" }) => (
  <div className="text-center py-16">
    <div className="text-6xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{message}</p>
  </div>
);
