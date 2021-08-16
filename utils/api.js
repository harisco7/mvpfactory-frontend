/* eslint-disable no-undef */

export function generateOMDBSearchEndpoint(query, page = 1) {
  return `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${query}&page=${page}`;
}
