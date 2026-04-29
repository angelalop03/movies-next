import Link from "next/link";
import { getMovieDetails } from "../../../services/api";

export default async function MovieDetail({ params }) {
  const resolvedParams = await params;
  const movie = await getMovieDetails(resolvedParams.id);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=Sin+imagen";

  return (
    <section className="movie-detail">
      <aside className="movie-detail-poster">
        <img className="movie-detail-image" src={imageUrl} alt={movie.title} />
      </aside>

      <article className="movie-detail-info">
        <Link href="/" className="back-link">
          ← Volver al inicio
        </Link>

        <h2 className="movie-detail-title">{movie.title}</h2>

        <p className="movie-detail-overview">
          {movie.overview || "No hay sinopsis disponible."}
        </p>

        <ul className="movie-detail-list">
          <li>
            <strong>Calificación:</strong> ⭐ {movie.vote_average}
          </li>
          <li>
            <strong>Fecha de estreno:</strong> {movie.release_date}
          </li>
          <li>
            <strong>Duración:</strong> {movie.runtime} minutos
          </li>
        </ul>
      </article>
    </section>
  );
}