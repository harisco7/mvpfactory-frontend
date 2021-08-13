export function generateOMDBSearchEndpoint(query, page = 1) {
  // eslint-disable-next-line no-undef
  return `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${query}&page=${page}`;
}
