import { Search, Star, Play, Calendar, Clock, Filter, X, Loader2 } from "lucide-react";

const API_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: "Your API Key",
  IMAGE_BASE: "https://image.tmdb.org/t/p/w500",
  BACKDROP_BASE: "https://image.tmdb.org/t/p/w1280",
};

const genreMap = {
  28: "Aksiyon",
  12: "Macera",
  16: "Animasyon",
  35: "Komedi",
  80: "Suç",
  99: "Belgesel",
  18: "Dram",
  10751: "Aile",
  14: "Fantastik",
  36: "Tarih",
  27: "Korku",
  10402: "Müzik",
  9648: "Gizem",
  10749: "Romantik",
  878: "Bilim Kurgu",
  10770: "TV Film",
  53: "Gerilim",
  10752: "Savaş",
  37: "Vahşi Batı",
};

const getGenreName = (genreId) => genreMap[genreId] || "Diğer";

const transformMovie = (apiMovie) => ({
  id: apiMovie.id,
  title: apiMovie.title,
  genre: apiMovie.genre_ids?.[0] ? getGenreName(apiMovie.genre_ids[0]) : "Bilinmiyor",
  year: new Date(apiMovie.release_date).getFullYear(),
  rating: parseFloat(apiMovie.vote_average).toFixed(1),
  duration: "N/A",
  director: "N/A",
  cast: [],
  plot: apiMovie.overview || "Özet bulunamadı.",
  poster: apiMovie.poster_path
    ? `${API_CONFIG.IMAGE_BASE}${apiMovie.poster_path}`
    : "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
  backdrop: apiMovie.backdrop_path
    ? `${API_CONFIG.BACKDROP_BASE}${apiMovie.backdrop_path}`
    : "https://images.unsplash.com/photo-1489599874821-063cf05ecd8c?w=800&h=400&fit=crop",
});

const transformMovieDetails = (movie, credits) => ({
  ...transformMovie(movie),
  duration: `${movie.runtime} min`,
  director: credits.crew.find((person) => person.job === "Director")?.name || "Bilinmiyor",
  cast: credits.cast.slice(0, 5).map((actor) => actor.name),
  genres: movie.genres.map((g) => g.name),
});

const getMockData = () => [
  {
    id: 1,
    title: "Inception",
    genre: "Bilim Kurgu",
    year: 2010,
    rating: 8.8,
    duration: "148 min",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    plot: "Dom Cobb, rüyalara girip sırları çalabilen yetenekli bir hırsızdır. Cobb ve ekibi, en tehlikeli düşmanına karşı son bir görev için hazırlanırken, geçmişiyle yüzleşmek zorunda kalır.",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1489599874821-063cf05ecd8c?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Aksiyon",
    year: 2008,
    rating: 9.0,
    duration: "152 min",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    plot: "Batman, Gotham'ı suçtan temizlemeye çalışır. Joker'in kaos yaratmasıyla birlikte, Batman'in ahlaki sınırları test edilir.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Bilim Kurgu",
    year: 2014,
    rating: 8.6,
    duration: "169 min",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    plot: "Bir grup kaşif, insanlığın geleceği için yeni bir yaşanabilir gezegen aramak üzere bir solucan deliğinden geçer.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genre: "Suç",
    year: 1994,
    rating: 8.9,
    duration: "154 min",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    plot: "Los Angeles'ta geçen birkaç suç hikayesinin kesişen yolları. Şiddet, mizah ve beklenmedik dönüşlerle dolu.",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1489599874821-063cf05ecd8c?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    genre: "Dram",
    year: 1994,
    rating: 9.3,
    duration: "142 min",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    plot: "Andy Dufresne, karısının öldürülmesiyle suçlanır ve Shawshank Hapishanesi'ne gönderilir. Orada umut ve dostluk bulur.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    title: "The Matrix",
    genre: "Bilim Kurgu",
    year: 1999,
    rating: 8.7,
    duration: "136 min",
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    plot: "Neo, gerçek dünyanın aslında bir simülasyon olduğunu keşfeder ve insanlığı kurtarmak için savaşır.",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1489599874821-063cf05ecd8c?w=800&h=400&fit=crop",
  },
];

export const movieAPI = {
  getPopularMovies: async (page = 1) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}/movie/popular?api_key=${API_CONFIG.API_KEY}&language=tr-TR&page=${page}`
      );
      const data = await response.json();
      return data.results.map(transformMovie);
    } catch (error) {
      console.error("API Error:", error);
      return getMockData();
    }
  },

  getMovieDetails: async (movieId) => {
    try {
      const [movieResponse, creditsResponse] = await Promise.all([
        fetch(`${API_CONFIG.BASE_URL}/movie/${movieId}?api_key=${API_CONFIG.API_KEY}&language=tr-TR`),
        fetch(`${API_CONFIG.BASE_URL}/movie/${movieId}/credits?api_key=${API_CONFIG.API_KEY}`),
      ]);

      const movie = await movieResponse.json();
      const credits = await creditsResponse.json();

      return transformMovieDetails(movie, credits);
    } catch (error) {
      console.error("Movie details error:", error);
      return null;
    }
  },

  searchMovies: async (query, page = 1) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}/search/movie?api_key=${API_CONFIG.API_KEY}&language=tr-TR&query=${encodeURIComponent(
          query
        )}&page=${page}`
      );
      const data = await response.json();
      return data.results.map(transformMovie);
    } catch (error) {
      console.error("Search error:", error);
      // Mock search functionality
      const mockData = getMockData();
      const filteredMovies = mockData.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.director.toLowerCase().includes(query.toLowerCase()) ||
        movie.cast.some(actor => actor.toLowerCase().includes(query.toLowerCase()))
      );
      return filteredMovies;
    }
  },

  getGenres: async () => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}/genre/movie/list?api_key=${API_CONFIG.API_KEY}&language=tr-TR`
      );
      const data = await response.json();
      return ["all", ...data.genres.map((g) => g.name)];
    } catch (error) {
      console.error("Genres error:", error);
      return ["all", "Aksiyon", "Dram", "Komedi", "Bilim Kurgu", "Korku"];
    }
  },
};
