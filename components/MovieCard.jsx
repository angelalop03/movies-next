import Link from "next/link";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=Sin+imagen";

  return (
    <article className="movie-card">
      <Link href={`/movie/${movie.id}`} className="movie-card-link">
        <img className="movie-card-image" src={imageUrl} alt={movie.title} />

        <section className="movie-card-content">
          <h2 className="movie-card-title">{movie.title}</h2>
          <p className="movie-card-rating">⭐ {movie.vote_average}</p>
        </section>
      </Link>
    </article>
  );
}

export default MovieCard;