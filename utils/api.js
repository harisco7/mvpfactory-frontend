/* eslint-disable no-undef */

export function generateOMDBSearchEndpoint(query, searchQueryFilters = {}, page = 1) {
  const yearFilter = searchQueryFilters.year ? `&y=${searchQueryFilters.year}` : '';
  const typeFilter = searchQueryFilters.type ? `&type=${searchQueryFilters.type}` : '';
  return `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${query}&page=${page}${yearFilter}${typeFilter}`;
}
