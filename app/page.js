import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../services/api";

export default async function Home() {
  const data = await getPopularMovies();
  const movies = data.results || [];

  return (
    <section className="page">
      <header className="page-header">
        <h2 className="page-title">Películas populares</h2>
        <p className="page-subtitle">
          Descubre las películas más populares del momento.
        </p>
      </header>

      <section className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </section>
  );
}