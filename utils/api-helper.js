/* eslint-disable no-undef */
import localForage from 'localforage';

export function generateOMDBSearchEndpoint(query, page = 1) {
  return `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${query}&page=${page}`;
}

export async function getStarredMovies() {
  try {
    const starred = await localForage.getItem(`starred`);
    return Object.keys(starred).map((id) => value[id]);
  } catch (err) {
    return false;
  }
}

export async function isMovieStarred(id) {
  try {
    const starred = await localForage.getItem(`starred`);
    const value = starred[id];
    return value != null;
  } catch (err) {
    return false;
  }
}

export async function setMovieStarred(movie, state) {
  try {
    const starred = (await localForage.getItem(`starred`)) || {};
    if (state) {
      starred[movie.imdbID] = movie;
    } else {
      delete starred[movie.imdbID];
    }
    await localForage.setItem(`starred`, starred);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
