import React, { useState, useEffect } from "react";
import { movieAPI } from "./services/api";
import { Header } from "./Layout/Header";
import HeroSection from "./components/HeroSection";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";
import MovieModal from "./components/MovieModal";
import { useMovies, useMovieSearch, useGenreFilter } from "./hooks/useInput";

const MovieSite = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [genres, setGenres] = useState(["all"]);

  // Custom hooks
  const { movies, loading, error, refetch } = useMovies();
  const { searchResults, searchLoading } = useMovieSearch(searchTerm, movies);
  const filteredMovies = useGenreFilter(searchResults, selectedGenre);

  // Load genres on mount
  useEffect(() => {
    const loadGenres = async () => {
      const genreData = await movieAPI.getGenres();
      setGenres(genreData);
    };
    loadGenres();
  }, []);

  // Handle movie selection with API detail fetch
  const handleMovieSelect = async (movie) => {
    setSelectedMovie(movie);

    try {
      const detailedMovie = await movieAPI.getMovieDetails(movie.id);
      if (detailedMovie) {
        setSelectedMovie(detailedMovie);
      }
    } catch (err) {
      console.error("Movie details error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={genres}
      />

      <HeroSection />

      <MovieGrid
        movies={filteredMovies}
        searchTerm={searchTerm}
        onMovieSelect={handleMovieSelect}
        loading={loading || searchLoading}
        error={error}
        onRetry={refetch}
      />

      <Footer />

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

const App = () => {
  return <MovieSite />;
};

export default App;
