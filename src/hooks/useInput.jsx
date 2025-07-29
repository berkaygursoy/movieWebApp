import { useEffect, useState } from "react";
import { movieAPI } from "../services/api";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await movieAPI.getPopularMovies();
      setMovies(data);
    } catch {
      setError("Filmler yüklenirken hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return { movies, loading, error, refetch: loadMovies };
};

export const useMovieSearch = (searchTerm, movies) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const searchTimer = setTimeout(async () => {
      if (searchTerm.trim()) {
        setSearchLoading(true);
        try {
          const results = await movieAPI.searchMovies(searchTerm);
          setSearchResults(results);
        } catch (err) {
          console.error("Search error:", err);
        } finally {
          setSearchLoading(false);
        }
      } else {
        setSearchResults(movies);
      }
    }, 500);

    return () => clearTimeout(searchTimer);
  }, [searchTerm, movies]);

  return { searchResults, searchLoading };
};

export const useGenreFilter = (movies, selectedGenre) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const filtered = selectedGenre === "all" ? movies : movies.filter((movie) => movie.genre === selectedGenre);
    setFilteredMovies(filtered);
  }, [movies, selectedGenre]);

  return filteredMovies;
};
