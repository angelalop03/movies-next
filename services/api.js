const API_KEY = "03dae988db21f705b8730d149f0bdbb4";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`, {
    cache: "no-store",
  });

  return res.json();
}

export async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`, {
    cache: "no-store",
  });

  return res.json();
}

export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}