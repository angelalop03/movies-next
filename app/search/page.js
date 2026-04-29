import MovieCard from "../../components/MovieCard";
import { searchMovies } from "../../services/api";

export default async function Search({ searchParams }) {
  const params = await searchParams;
  const query = params.query || "";

  const data = query ? await searchMovies(query) : { results: [] };
  const movies = data.results || [];

  return (
    <section className="page">
      <header className="page-header">
        <h2 className="page-title">Buscar películas</h2>
        <p className="page-subtitle">
          Encuentra películas por título y consulta sus detalles.
        </p>
      </header>

      <form className="search-form" action="/search">
        <input
          className="search-input"
          type="text"
          name="query"
          placeholder="Escribe el título de una película..."
          defaultValue={query}
        />

        <button className="search-button" type="submit">
          Buscar
        </button>
      </form>

      <section className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </section>
  );
}